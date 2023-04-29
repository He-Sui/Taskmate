class Svg {
    name: string = '';
    size: number = 0;
    paths: string[] = [];

    constructor(name: string, size: number, paths: string[]) {
        this.name = name;
        this.size = size;
        this.paths = paths;
    }
}

export let svgMap: { [key: string]: Svg } = {};

let imagePaths = ['M810.666667 640V341.333333H213.333333v277.333334l59.733334-55.466667 115.2 98.133333 226.133333-196.266666L810.666667 640z m85.333333-384v512H128V256h768z']
let image = new Svg('image', 1024, imagePaths);
svgMap[image.name] = image;

let sendPaths = ['M2,21L23,12L2,3V10L17,12L2,14V21Z']
let send = new Svg('send', 24, sendPaths);
svgMap[send.name] = send;

let emojiPaths = ['M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z']
let emoji = new Svg('emoji', 24, emojiPaths);
svgMap[emoji.name] = emoji;

let closePaths = ['M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z']
let close = new Svg('close', 24, closePaths);
svgMap[close.name] = close;

let filePaths = ['M14,17H7V15H14M17,13H7V11H17M17,9H7V7H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z']
let file = new Svg('file', 24, filePaths);
svgMap[file.name] = file;

let closeoutlinePaths = ['M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z']
let closeoutline = new Svg('closeoutline', 24, closeoutlinePaths);
svgMap[closeoutline.name] = closeoutline;

let teacherPaths = ['M516.352 552.192c-116.352 0-211.072-94.72-211.072-211.072 0-116.352 94.72-211.072 211.072-211.072 116.352 0 211.072 94.72 211.072 211.072 0 116.48-94.72 211.072-211.072 211.072z m0-370.944c-88.192 0-159.872 71.68-159.872 159.872 0 88.192 71.68 159.872 159.872 159.872s159.872-71.68 159.872-159.872c0-88.192-71.68-159.872-159.872-159.872z', 'M858.496 843.264h-51.2c0-160.512-130.56-291.072-291.072-291.072S225.28 682.752 225.28 843.264h-51.2c0-188.672 153.472-342.272 342.272-342.272s342.144 153.6 342.144 342.272z', 'M528.768 791.552l37.632-161.28a12.7872 12.7872 0 0 0-12.416-15.744H478.72c-8.192 0-14.336 7.68-12.416 15.744l37.632 161.28c3.072 13.184 21.76 13.184 24.832 0z']
let teacher = new Svg('teacher', 1024, teacherPaths);
svgMap[teacher.name] = teacher;

let studentPaths = ['M500 658.7c-3.9 0-7.7-1-11.2-3L76.5 415.6c-6.9-4-11.1-11.5-11-19.5 0.1-8 4.5-15.3 11.5-19.2l436.4-240.1c6.8-3.8 15.1-3.7 21.9 0.3l412.4 240c6.9 4 11.1 11.5 11 19.5-0.1 8-4.5 15.3-11.5 19.2L510.7 655.9c-3.3 1.9-7 2.8-10.7 2.8zM132.8 397l367.6 214 390.9-215.1-367.6-214L132.8 397z', 'M869.038 424.736l44.5-0.424 2.404 252.3-44.5 0.424zM515.3 889.9C350.8 889.9 217 756.1 217 591.6V487.5h44.5v104.1c0 140 113.9 253.8 253.8 253.8s253.8-113.9 253.8-253.8V470.5h44.5v121.1c0 164.5-133.8 298.3-298.3 298.3z']
let student = new Svg('student', 1024, studentPaths);
svgMap[student.name] = student;

let homePaths = ['M1045.799033 528.957174 586.568905 64.159973c-27.94201-28.155307-36.047325-28.155307-63.989335 0L63.349442 528.957174l-31.674721-31.930678L503.958674 21.116481c27.963339-28.155307 73.267789-28.155307 101.209798 0l472.326612 475.910015L1045.799033 528.957174zM200.627895 917.351108c0 23.569405 19.111481 42.659557 42.659557 42.659557l622.573571 0c23.548075 0 42.659557-19.090152 42.659557-42.659557L908.52058 576.074654l40.654558 0 0 341.276454c0 47.11748-38.201633 85.319113-85.319113 85.319113l-618.563573 0c-47.11748 0-85.319113-38.201633-85.319113-85.319113L159.973338 576.074654l40.654558 0L200.627895 917.351108z']
let home = new Svg('home', 1024, homePaths)
svgMap[home.name] = home

let menuPaths = ['M170.666667 213.333333h682.666666v85.333334H170.666667V213.333333z m0 512h682.666666v85.333334H170.666667v-85.333334z m0-256h682.666666v85.333334H170.666667v-85.333334z']
let menu = new Svg('menu', 1024, menuPaths);
svgMap[menu.name] = menu;

let arrayLeftPaths = ['M467.2 512l272-272-92.8-89.6-272 272L284.8 512l89.6 92.8 272 268.8 92.8-89.6z']
let arrayLeft = new Svg('arrayLeft', 1024, arrayLeftPaths);
svgMap[arrayLeft.name] = arrayLeft;

let arrayDownPaths = ['M534.4 553.6L262.4 284.8l-89.6 89.6 272 272 89.6 89.6 89.6-89.6 272-272-89.6-89.6z']
let arrayDown = new Svg('arrayDown', 1024, arrayDownPaths);
svgMap[arrayDown.name] = arrayDown;

let plusPaths = ['M984.293767 435.610686 590.464452 435.610686 590.464452 41.78318l-157.531364 0 0 393.827505L39.105583 435.610686l0 157.531364 393.827505 0 0 393.831124 157.531364 0L590.464452 593.142049l393.829314 0L984.293767 435.610686z']
let plus = new Svg('plus', 1024, plusPaths);
svgMap[plus.name] = plus;

let tickPaths = ['M817.728 198.72l111.744 114.56-545.216 532.128-285.92-273.024 110.528-115.712 174.176 166.336z']
let tick = new Svg('tick', 1024, tickPaths);
svgMap[tick.name] = tick;

let playPaths = ['M242.48 185.248C179.52 153.76 128 185.6 128 256v512c0 70.4 51.52 102.24 114.48 70.752l539.024-269.52c62.96-31.488 62.96-83.008 0-114.48L242.48 185.248z']
let play = new Svg('play', 1024, playPaths);
svgMap[play.name] = play;

let downloadPaths = ['M877.49 381.468H668.638V68.191H355.36v313.277H146.51l365.489 365.49 365.49-365.49zM146.51 851.383v104.425h730.98V851.383H146.51z']
let download = new Svg('download', 1024, downloadPaths);
svgMap[download.name] = download;

let transmitPaths = ['M565.934 817.574a34.816 34.816 0 0 0 9.818 29.394l0.302 0.241a35.539 35.539 0 0 0 25.6 10.963c11.143 0 20.66-5.42 27.226-13.312l354.545-387.072a35.117 35.117 0 0 0 10.24-27.106 35.057 35.057 0 0 0-10.24-27.106L626.892 14.336a36.503 36.503 0 0 0-51.2 0 34.936 34.936 0 0 0-9.758 29.395V253.35c-295.996 0-535.974 238.893-535.974 533.684a529.468 529.468 0 0 0 44.454 212.51C116.7 777.276 329.812 608.437 565.332 608.437l0.602 209.137z']
let transmit = new Svg('transmit', 1024, transmitPaths);
svgMap[transmit.name] = transmit;

let signalPaths = ['M60.8 1024c-33.6 0-60.8-27.2-60.8-60.8v-243.2c0-33.6 27.2-60.8 60.8-60.8s60.8 27.2 60.8 60.8v243.2c0 33.6-27.2 60.8-60.8 60.8zM361.6 1024c-33.6 0-60.8-27.2-60.8-60.8v-473.6c0-33.6 27.2-60.8 60.8-60.8s60.8 27.2 60.8 60.8v473.6c0 33.6-27.2 60.8-60.8 60.8zM662.4 1024c-33.6 0-60.8-27.2-60.8-60.8v-678.4c0-33.6 27.2-60.8 60.8-60.8s60.8 27.2 60.8 60.8v678.4c0 33.6-27.2 60.8-60.8 60.8zM963.2 1024c-33.6 0-60.8-27.2-60.8-60.8V60.8c0-33.6 27.2-60.8 60.8-60.8s60.8 27.2 60.8 60.8v902.4c0 33.6-27.2 60.8-60.8 60.8z']
let signal = new Svg('signal', 1024, signalPaths)
svgMap[signal.name] = signal;

let setPaths = ['M905.86 428.021h-0.002l-71.797-15.945c-5.594-17.868-12.887-34.998-21.324-51.473l38.849-64.668c14.509-23.2 21.803-57.282 0-79.129l-39.588-39.547c-10.662-10.708-24.994-15.206-39.461-15.206-14.985 0-30.151 4.895-41.465 12.759L668.1 214.924c-16.343-8.477-33.384-15.731-51.125-21.499l-16.121-72.621c-4.806-26.654-28.1-55.492-58.989-55.492h-55.932c-30.897 0-49.815 29.276-55.932 55.93l-17.963 71.746c-18.917 6.03-37.143 13.761-54.445 22.897l-64.538-41.075c-11.361-7.865-26.481-12.759-41.512-12.759-14.42 0-28.752 4.497-39.46 15.206l-39.543 39.547c-21.848 21.846-14.507 55.93 0 79.128l40.854 68.078c-7.644 15.469-14.461 31.374-19.705 48.064l-71.75 15.946c-26.654 4.812-55.495 28.099-55.495 58.995v55.93c0 30.889 29.277 49.813 55.932 55.93l72.665 18.13c5.029 15.428 11.273 30.237 18.4 44.569l-40.899 68.165c-14.508 23.157-21.807 57.24 0 79.087l39.588 39.548c10.663 10.704 24.994 15.248 39.455 15.248 14.991 0 30.151-4.894 41.471-12.758l64.672-41.249c17.432 9.217 35.744 17.041 54.795 23.071l17.917 71.573c6.118 26.653 25.035 55.931 55.932 55.931h55.933c30.89 0 54.184-28.84 58.989-55.493l16.122-72.838c17.565-5.685 34.433-12.853 50.559-21.194l63.1 40.199c11.313 7.866 26.481 12.76 41.465 12.76 14.467 0 28.8-4.546 39.461-15.248l39.588-39.548c21.803-21.847 14.509-55.93 0-79.089l-38.89-64.757c7.819-15.38 14.596-31.371 20.055-47.976l72.671-18.132c26.655-6.115 55.932-25.039 55.932-55.93v-55.93c-0.003-30.893-28.841-54.181-55.497-58.993zM514.684 648.029c-74.593 0-135.333-60.562-135.333-134.931s60.739-134.889 135.333-134.889c74.588 0 135.287 60.52 135.287 134.889s-60.699 134.931-135.287 134.931z']
let set = new Svg('set', 1024, setPaths);
svgMap[set.name] = set;

let circlePaths = ['M510.959 70.334c-243.334 0-440.596 197.245-440.596 440.597 0 243.319 197.264 440.596 440.596 440.596 243.317 0 440.597-197.275 440.597-440.596-0.001-243.353-197.28-440.597-440.597-440.597v0zM510.959 883.829c-205.936 0-372.902-166.943-372.902-372.897 0-205.961 166.965-372.902 372.902-372.902 205.959 0 372.901 166.943 372.901 372.902 0 205.953-166.943 372.897-372.901 372.897v0zM510.959 883.829z']
let circle = new Svg('circle', 1024, circlePaths);
svgMap[circle.name] = circle;

let play2Paths = ['M224 938.713333a53.58 53.58 0 0 1-53.333333-53.433333V138.72a53.333333 53.333333 0 0 1 80.886666-45.666667l618.666667 373.28a53.333333 53.333333 0 0 1 0 91.333334l-618.666667 373.28a53.16 53.16 0 0 1-27.553333 7.766666z m0.046667-810.666666a10.98 10.98 0 0 0-5.333334 1.42 10.466667 10.466667 0 0 0-5.38 9.253333v746.56a10.666667 10.666667 0 0 0 16.18 9.133333l618.666667-373.28a10.666667 10.666667 0 0 0 0-18.266666l-618.666667-373.28a10.386667 10.386667 0 0 0-5.446666-1.586667z']
let play2 = new Svg('play2', 1024, play2Paths)
svgMap[play2.name] = play2

let arrayLeft2Paths = ['M729.6 931.2l-416-425.6 416-416c9.6-9.6 9.6-25.6 0-35.2-9.6-9.6-25.6-9.6-35.2 0l-432 435.2c-9.6 9.6-9.6 25.6 0 35.2l432 441.6c9.6 9.6 25.6 9.6 35.2 0C739.2 956.8 739.2 940.8 729.6 931.2z']
let arrayLeft2 = new Svg('arrayLeft2', 1024, arrayLeft2Paths)
svgMap[arrayLeft2.name] = arrayLeft2

let menu2Paths = ['M192.037 287.953h640.124c17.673 0 32-14.327 32-32s-14.327-32-32-32H192.037c-17.673 0-32 14.327-32 32s14.327 32 32 32zM192.028 543.17h638.608c17.673 0 32-14.327 32-32s-14.327-32-32-32H192.028c-17.673 0-32 14.327-32 32s14.327 32 32 32zM832.161 735.802H192.037c-17.673 0-32 14.327-32 32s14.327 32 32 32h640.124c17.673 0 32-14.327 32-32s-14.327-32-32-32z']
let menu2 = new Svg('menu2', 1024, menu2Paths)
svgMap[menu2.name] = menu2