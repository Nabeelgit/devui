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

let finish_animations = false;

let loadingText = document.querySelector(".loading-text");
let middleLogo = document.querySelector(".middle-logo");
let middleLogoSpan = document.querySelector(".middle-logo .main-span");
let middleLogoSpanText = document.querySelector(".middle-logo .main-span span");
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
    middleLogoSpanText.style.opacity = "0";
    await sleep(500);
    for(let i = 0; i < 5; i++){
      middleLogoSpanText.style.opacity = middleLogoSpanText.style.opacity == "0" ? "100" : "0";
      await sleep(100);
    }
    middleLogoSpanText.style.opacity = "100";
    await sleep(500);
    let texts_opacity = 100;
    while (texts_opacity > 0) {
      texts_opacity--;
      middleLogoSpanText.style.opacity = texts_opacity + "%";
      await sleep(10);
    }
    await sleep (500);
    document.body.style.cursor = "default";
    let currentWidth = 22;
    middleLogoSpan.style.width = currentWidth + "vw";
    while (currentWidth < 50){
      currentWidth += 0.1;
      middleLogoSpan.style.width = currentWidth + "vw";
      await sleep(1);
    }
    let currentHeight = getNumFromString(getComputedStyle(middleLogoSpan).height);
    middleLogoSpan.style.height = getComputedStyle(middleLogoSpan).height;
    while (currentHeight < 550){
      currentHeight += 1;
      middleLogoSpan.style.height = currentHeight + "px";
      await sleep(1);
    }
    await sleep(100);
    let middle_logo_opacity = 100;
    while (middle_logo_opacity > 0){
      middle_logo_opacity--;
      middleLogo.style.opacity = middle_logo_opacity + "%";
      await sleep(1);
    }
    if(!finish_animations) {
      finish_animations = true;
      await sleep(100);
      middleLogo.style.display = "none";
      dash.style.opacity = "0";
      let dash_opacity = 0;
      dash.style.display = "block";
      while (dash_opacity < 100){
        dash_opacity += 0.5;
        dash.style.opacity = dash_opacity + "%";
        await sleep(10);
      }
    }
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

let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let year = document.getElementById("year");
let month_day = document.getElementById("month-day");
let uptime_el = document.getElementById("uptime")
let start_time = new Date();
let battery_el = document.getElementById("battery");
let fake_memory_dots_cols = document.querySelectorAll(".fake_dot_col");
let all_dots = [];
fake_memory_dots_cols.forEach(one_div => {
  for(let i = 0; i < 40; i++){
    let fake_dot_span = document.createElement("span");
    fake_dot_span.innerText = ".";
    one_div.appendChild(fake_dot_span);
    all_dots.push(fake_dot_span);
  }
});
let user_online_state = document.getElementById("user-online-state");
let user_ping = document.getElementById("user-ping");
let ping_update = 4;
function updateData(){
  const now = new Date();
  hours.innerText = (now.getHours() < 10 ? "0" : "") + now.getHours();;
  minutes.innerText = (now.getMinutes() < 10 ? "0" : "") + now.getMinutes();
  seconds.innerText = (now.getSeconds() < 10 ? "0" : "") + now.getSeconds();
  year.innerText = now.getFullYear();
  month_day.innerText = getFormattedDate(now);
  uptime_el.innerText = getUptime(start_time, new Date());
  getBatteryLevel();
  user_online_state.innerText = navigator.onLine ? "ONLINE" : "OFFLINE";
  ping_update++;
  if(ping_update > 3){
    getPing().then(ping => {
      user_ping.innerText = ping + "ms";
    });
    ping_update = 0;
  }

}
const canvases = document.querySelectorAll('#fakeGraph');
const network_canvas = document.getElementById("fakeGraphNetwork");
const opposite_canvas = document.getElementById("fakeGraphOpposite");
function updateFakeData(){
  canvases.forEach(drawFakeGraph);
  all_dots.forEach(one_dot => {
    one_dot.style.opacity = (Math.floor(Math.random() * (100 - 1) + 1) > 50 ? 50 : 100) + "%";
  });
  drawFakeGraph(network_canvas);
  const ctx1 = network_canvas.getContext("2d");
  const ctx2 = opposite_canvas.getContext("2d");
  ctx2.clearRect(0, 0,  opposite_canvas.width,  opposite_canvas.height);
  ctx1.fillRect(50, 50, 100, 100);
  ctx2.drawImage(network_canvas, 0, 0);
}

function drawFakeGraph(canvas){
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const width = canvas.width;
    const height = canvas.height;
    const points = 50;

    const data = [];
    for (let i = 0; i < points; i++) {
      data.push(Math.random() * height);
    }

    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, data[0]);
    for (let i = 1; i < data.length; i++) {
      const x = (i / (points - 1)) * width;
      const prevX = ((i - 1) / (points - 1)) * width;
      const prevY = data[i - 1];
      const currY = data[i];
      const midX = (prevX + x) / 2;
      const midY = (prevY + currY) / 2;
      ctx.quadraticCurveTo(prevX, prevY, midX, midY);
    }
    ctx.stroke();
}

function getFormattedDate(now) {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  
  const month = months[now.getMonth()];
  const day = now.getDate();


  return `${month} ${day}`;
}

/*

TODO

*/
function getUptime(old_date, new_date){
  let uptime_days = Math.round(((old_date-new_date)/1000)/86400);
  return `${uptime_days}d`;
}

function getOS() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }
  if (/win/i.test(userAgent)) {
    return "Windows";
  }
  if (/android/i.test(userAgent)) {
    return "Android";
  }
  if (/linux/i.test(userAgent)) {
    return "Linux";
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }
  if (/mac/i.test(userAgent)) {
    return "MacOS";
  }
  return "Unknown";
}

function getBatteryLevel(){
  if ('getBattery' in navigator) {
    navigator.getBattery().then(battery => {
      battery_el.innerText = (battery.level * 100).toFixed(0) + "%";
    })
  }
  battery_el.innerText = "0%";
}

async function getIPAndType() {
  try {
    let res = await fetch("https://api64.ipify.org?format=json"); 
    let data = await res.json();
    let ip = data.ip;

    let type = ip.includes(":") ? "IPv6" : "IPv4";

    return { ip, type };
  } catch (err) {
    return { ip: "IPv?", type: "N/A" };
  }
}
getIPAndType().then(result => {
  document.getElementById("user-ip").innerText = result.ip;
  document.getElementById("user-ip-type").innerText = result.type
});

async function getPing(url = "https://api64.ipify.org?format=json") {
  let start = performance.now();

  try {
    await fetch(url, { cache: "no-store" }); 
    let end = performance.now();
    return Math.round(end - start); // ms
  } catch (err) {
    return "N/A";
  }
}

let user_lat = "N/A";
let user_lon = "N/A";
let lat_long_el = document.getElementById("lat-lon");

function getUserLocation() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        user_lat = position.coords.latitude;
        user_lon = position.coords.longitude;
        lat_long_el.innerText = `${user_lat}, ${user_lon}`;
      },
    );
  }
}
getUserLocation();


document.addEventListener("keydown", function(e){
  if(e.shiftKey && e.key.toLowerCase() == "t" && !finish_animations){
    loadingText.remove();
    middleLogo.remove();
    dash.style.display = "block";
    document.body.style.cursor = "default";
    finish_animations = true;
  }
});

document.addEventListener("mousedown", function(e){
  if(e.button == 0){
    if(e.target.classList.contains("clickable-icon")){
      icon = e.target;
      if(!e.ctrlKey && !e.shiftKey){
        clearSelected();
      }
      let parent = icon;
      if(icon.id != "folder_parent"){
        parent = icon.parentElement;
      }
      if(e.shiftKey){
        let all_folders = document.querySelectorAll(".folder");
        let parent_index = 0;
        let target_index = 0;
        for(let j = 0; j < all_folders.length; j++){          
          if(all_folders[j].classList.contains("icon-selected")){
            parent_index = j;
          }
          if(all_folders[j] == parent){
            target_index = j;
          }
        }
        if(parent_index < target_index){
          for(; parent_index < target_index; parent_index++){
            all_folders[parent_index].classList.add("icon-selected");
          }
        } else {
          for(; parent_index > target_index; parent_index--){
            all_folders[parent_index].classList.add("icon-selected");
          }
        }
      }
      parent.classList.add("icon-selected")
    } else {
      clearSelected();
    }
  }
})

function clearSelected(){
  let selected_icons = document.querySelectorAll(".icon-selected");
  selected_icons.forEach(sel => {
    sel.classList.remove("icon-selected");
  })
}

updateData();
document.getElementById("os").innerText = getOS();
setInterval(updateData, 1000);
updateFakeData();
setInterval(updateFakeData, 2000);


start();