#### Download

[Windows & Linux (Debian)](https://github.com/RedSparr0w/Pokeclicker-desktop/releases/latest)
Click the [Download] button next to your respective platform and follow the install instructions on the page.

For other platforms and Linux distros see below.

#### Mac

There is no native client for Mac but it is available via Homebrew:

```
brew tap pokeclicker/tap
brew install pokeclicker-desktop
```

#### Non-Debian-based Linux distros

You will need to install Distrobox to create an Ubuntu environment, along with Docker.  Either use the terminal or your graphical package manager to install these.

Fedora:
sudo dnf install distrobox docker

OpenSUSE:
sudo zypper install distrobox docker

Arch:
sudo pacman -S distrobox docker


Add your user to the Docker group:
sudo usermod -aG docker *username*

Start the Docker service at boot:
sudo systemctl start docker
sudo systemctl enable docker

Reboot your system.

Now, create an Ubuntu container and enter it:
distrobox create -n ubuntu --image ubuntu:24.04
distrobox enter ubuntu

Note: After you create a password, check to see if you can run sudo.  If you’re not in the sudoer’s file, exit the distrobox with the exit command, and re-enter with:

sudo docker exec -it ubuntu bash

Now add your user to the sudo group.  Your username should be the same as on the host system.

sudo usermod -a -G sudo *username*

Exit and re-enter the distrobox normally.  You now have access to Apt.  Now download and install Pokeclicker from the link above.

cd /path/to/pokeclicker.deb
sudo apt install ./pokeclicker.deb

Now add Pokeclicker to your system menu:

distrobox-export --app Pokeclicker