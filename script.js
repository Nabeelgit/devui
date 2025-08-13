const randomText = [
  "Initializing system firmware...",
  "Probing PCI devices...",
  "ACPI: interrupt controller enabled",
  "Loading kernel modules...",
  "usb 1-1: new high-speed USB device detected",
  "Searching for root filesystem...",
  "Ext4-fs (sda1): mounted filesystem with ordered data mode",
  "Starting udev...",
  "Applying system clock sync...",
  "Loading network drivers...",
  "Bringing up loopback interface...",
  "Configuring firewall rules...",
  "Activating bluetooth adapter...",
  "Detecting audio devices...",
  "Loading GPU firmware...",
  "NVIDIA: probing for GPUs...",
  "systemd[1]: Started Daily apt upgrade and clean activities.",
  "udevd[287]: renamed network interface eth0 to enp3s0",
  "kernel: audit: type=1400 audit(162587.745:2): apparmor=\"STATUS\" operation=\"profile_load\" profile=\"/usr/bin/man\"",
  "grub-mkconfig: Generating grub configuration file...",
  "Reached target Graphical Interface.",
  "Finished Load Kernel Modules.",
  "Started Apply Kernel Variables.",
  "Reached target Network is Online.",
  "Mounting Temporary Directory (/tmp)...",
  "Started OpenSSH server daemon.",
  "Starting LSB: automatic crash report generation...",
  "Finished Create Volatile Files and Directories.",
  "systemd-logind: New seat seat0.",
  "systemd[1]: Started GNOME Display Manager.",
  "udisksd[563]: Acquired the name org.freedesktop.UDisks2 on the system message bus",
  "kernel: random: crng init done",
  "Starting CUPS printing spooler/server...",
  "Started Disk Manager.",
  "fsck: fsck.ext4: No errors found",
  "systemd[1]: Started Daily Cleanup of Temporary Directories.",
  "Loading AppArmor profiles managed internally by snapd",
  "snapd[735]: AppArmor status is enabled and enforced",
  "kernel: IPv6: ADDRCONF(NETDEV_UP): enp3s0: link is not ready",
  "kernel: Adding 2097148k swap on /swapfile. Priority:-2 extents:6 across:2228220k FS",
  "udevd[411]: link_config: autonegotiation is unset or enabled, the speed and duplex are not writable.",
  "systemd[1]: Reached target Timers.",
  "Starting Authorization Manager...",
  "kernel: i915 0000:00:02.0: [drm] Initialized i915 1.6.0 20190417 for 0000:00:02.0 on minor 0",
  "systemd[1]: Listening on D-Bus System Message Bus Socket.",
  "kernel: nouveau 0000:01:00.0: DRM: VRAM: 2048 MiB",
  "kernel: nouveau 0000:01:00.0: DRM: GART: 512 MiB",
  "kernel: nouveau 0000:01:00.0: DRM: BIOS version 80.07.35.00.10",
  "kernel: nouveau 0000:01:00.0: DRM: TMDS table version 2.0",
  "kernel: nouveau 0000:01:00.0: DRM: DCB version 4.0",
  "kernel: usb 1-1.4: USB disconnect, device number 4",
  "systemd[1]: Reached target Sound Card.",
  "kernel: ata1: SATA link up 6.0 Gbps (SStatus 133 SControl 300)",
  "kernel: ata1.00: configured for UDMA/133",
  "systemd[1]: Starting Save/Restore Sound Card State...",
  "systemd[1]: Finished Save/Restore Sound Card State.",
  "kernel: EXT4-fs warning (device sda2): ext4_end_bio:323: I/O error 10 writing to inode 251698 (offset 0 size 0 starting block 123456)",
  "systemd[1]: Starting Daemon for power management...",
  "systemd[1]: Finished Daemon for power management.",
  "kernel: usb 1-1.1: new full-speed USB device number 5 using xhci_hcd",
  "systemd[1]: Starting Restore /etc/resolv.conf if the system crashed before the file could be saved...",
  "Finished Restore /etc/resolv.conf.",
  "systemd[1]: Started Session 2 of user root.",
]

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let loadingText = document.querySelector(".loading-text");
let middleLogo = document.querySelector(".middle-logo");
let middleLogoSpan = document.querySelector(".middle-logo .main-span");
let dash = document.querySelector(".dashboard");

async function start(){
  // fake boot messages
    document.body.style.cursor = "progress";
    let progressTime = 0
    for(let i = 0; i < randomText.length; i++){
        let newText = document.createElement("span");
        newText.innerText = randomText[i];
        loadingText.appendChild(newText);
        let rand = Math.floor(Math.random() * (100 - 1) + 1) > 70 ? 300 : 10;
        progressTime += rand;
        await sleep(rand);
    }
    let newText = document.createElement("span");
    newText.innerText = `systemd[1]: Startup finished in ${progressTime/1000}s.`
    loadingText.appendChild(newText);

    await sleep(1000);
    loadingText.style.display = "none";

    // show logo
    document.body.style.cursor = "default";
    middleLogo.style.display = "flex";
    await sleep(500);
    middleLogoSpan.style.backgroundColor = "white";
    middleLogoSpan.style.border = "1px solid white"
    await sleep(500);
    middleLogoSpan.style.backgroundColor = "black";
    await sleep(500);
    middleLogoSpan.style.border = "none";
    await sleep(100);
    middleLogo.classList.add("glitch");
    await sleep(500);
    for(let i = 0; i < 5; i++){
      if(!middleLogo.classList.contains("glitch")){
        middleLogo.classList.add("glitch");
      } else {
        middleLogo.classList.remove("glitch"); 
      }
      await sleep(100);
    }
    await sleep(500);
    middleLogoSpan.style.border = "1px solid white";
    await sleep(500);
    document.querySelector(".middle-logo .main-span span").style.opacity = "0";
    await sleep (500);
    document.body.style.cursor = "default";
    let currentWidth = 22;
    middleLogoSpan.style.width = currentWidth + "vw";
    while (currentWidth < 55){
      currentWidth += 0.1;
      middleLogoSpan.style.width = currentWidth + "vw";
      await sleep(1);
    }
    let currentHeight = getNumFromString(getComputedStyle(middleLogoSpan).height);
    middleLogoSpan.style.height = getComputedStyle(middleLogoSpan).height;
    while (currentHeight < 650){
      currentHeight += 1;
      middleLogoSpan.style.height = currentHeight + "px";
      await sleep(1);
    }
    await sleep(100);
    middleLogoSpan.style.position = "absolute";
    let currentTop = getNumFromString(getComputedStyle(middleLogoSpan).top);
    while (currentTop > 0){
      currentTop--;
      middleLogoSpan.style.top = currentTop + "px";
      console.log(currentTop)
      await sleep(10);
    }
    middleLogo.style.display = "none";
    dash.style.display = "block";
}

function getNumFromString(str){
  let num = "";
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for(let i = 0; i < str.length; i++){
    if(!numbers.includes(str[i])){
      break;
    }
    num += str[i];
  }
  return parseInt(num);
}

start();


