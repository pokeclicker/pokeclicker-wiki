
class DealProfit {
    constructor(type, amount) {
        this.type = type;
        this.amount = amount;
    }
}

const calculateProfit = (deal) => {
    if (deal.item1.valueType != UndergroundItemValueType.Diamond)
        deal.item1.value = 0;
    if (deal.item2.valueType != UndergroundItemValueType.Diamond)
        deal.item2.value = 0;
    if (deal.item1.value || deal.item2.value) {
        // An item is worth diamonds
        const profit =
            deal.item2.value * deal.amount2 - deal.item1.value * deal.amount1;
        return new DealProfit("diamond", profit);
    } else {
        // Neither item is worth diamonds
        const profit = deal.amount2 - deal.amount1;
        return new DealProfit("item", profit);
    }
};

const getDealsList = (fromDate, toDate, maxDeals) => {
    const dealsList = [];
    let date = fromDate;
    let i = 0;
    while (date < toDate) {
        date = new Date(
            fromDate.getFullYear(),
            fromDate.getMonth(),
            fromDate.getDate() + i
        );
        DailyDeal.generateDeals(maxDeals, date);

        const deals = [...DailyDeal.list()]
        dealsList.push(
            deals
                .map((deal) => ({ ...deal, profit: calculateProfit(deal), date }))
.sort((a, b) => {
                    // when processing deals, we want to make sure all possible links
                    // have been processed. Sometimes, there is a deal on the same day
                    // which we can link to, so we sort the deals within each day to
                    // make sure those linkables have been processed

                    // if `b` can link to `a`, `a` should sort after `b` (and vice versa)
                    if (a.item1 == b.item2) return 1;
                    if (b.item1 == a.item2) return -1;

                    // if `a` can be linked from something sort `a` after `b`
                    if (dealsList.find((x) => a.item1 == x.item2)) return 1;
                    // if `b` can be linked from something, sort `a` before `b`
                    if (dealsList.find((x) => b.item1 == x.item2)) return -1;

                    return 0;
                })
        );

        i++;
    }
    return dealsList.flat();
};

const addChain = (start, chainLinks, chainList, minProfit = 0.1, limit) => {
    const profit = start.profit - start.deal.item1.value;
        const chain = [];
        let link = start;

        while (link != undefined) {
            chain.push(link.deal);
            link = chainLinks.list[link.next];
        }

        if (profit >= minProfit) {
            chainList.push({ profit: profit, deals: chain });
            chainList.sort((a, b) => b.profit - a.profit);

            if (chainList.length > limit) {
                chainList.pop();
            }
        }
};

const betterToSell = (deal, next) => {
    // If we wouldn't get diamonds from selling item2, we only stand to gain
    const isDia = deal.amount2 < 100 && deal.amount2 > 0;

    // If we would be better off selling item2 of this deal,
    // then we shouldn't suggest feeding it into the chain
    return isDia && next.profit < deal.item2.value;
};

function getDealChains(
    maxSlots,
    fromDate = new Date(),
    toDate = new Date(
        fromDate.getFullYear(),
        fromDate.getMonth(),
        fromDate.getDate() + 14
    ),
    limit = 20,
) {
    if (isNaN(maxSlots) || maxSlots <= 0 || maxSlots > 5) {
        maxSlots = 3;
    }

    const dailyDeals = getDealsList(fromDate, toDate, maxSlots);
    const chainList = [];

    const chainLinks = dailyDeals.reduceRight(
        (res, deal) => {
            // Link to the best future deal
            let next = res.bestStartingWith[deal.item2.name];

            // Don't link to a bad chain
            if (next != undefined && betterToSell(deal, res.list[next])) {
                next = undefined;
            }

            const chainlink = { deal: deal, next: next, linkedFrom: [] };
            const index = res.list.length;

            // Calculate chain value from this deal
            if (next != undefined) {
                const nextlink = res.list[next];
                nextlink.linkedFrom.push(index);
                chainlink.profit =
                    (nextlink.profit * deal.amount2) / deal.amount1;
            } else {
                const val =
                    deal.item2.value > 100 || deal.item2.value < 0
                        ? 0
                        : deal.item2.value;
                chainlink.profit = (val * deal.amount2) / deal.amount1;
            }

            // update bestStartingWith
            const bestItem1 = res.list[res.bestStartingWith[deal.item1.name]];
            if (
                chainlink.profit > 0 &&
                (!bestItem1 || bestItem1.profit < chainlink.profit)
            ) {
                res.bestStartingWith[deal.item1.name] = index;
            }

            res.list.push(chainlink);
            return res;
        },
        { bestStartingWith: {}, list: [] }
    );

    // build chainList
    // only add chains using the start, ie those that aren't linkedFrom anything
    chainLinks.list.forEach((link) => link.linkedFrom.length || addChain(link, chainLinks, chainList, 0.1, limit));

    return chainList;
}

module.exports = {
    getDealChains,
}