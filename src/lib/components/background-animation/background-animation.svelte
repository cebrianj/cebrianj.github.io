<div class="firefly-container">
  <div class="firefly"></div>
  <div class="firefly"></div>
  <div class="firefly"></div>
  <div class="firefly"></div>
  <div class="firefly"></div>
  <div class="firefly"></div>
  <div class="firefly"></div>
  <div class="firefly"></div>
  <div class="firefly"></div>
  <div class="firefly"></div>
  <div class="firefly"></div>
  <div class="firefly"></div>
  <div class="firefly"></div>
  <div class="firefly"></div>
  <div class="firefly"></div>
</div>

<style>
  .firefly-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .firefly {
    z-index: -1;
    position: absolute;
    left: 30%;
    top: 30%;
    width: 8px;
    height: 8px;
    margin: 0 0 0 0;
    animation: ease 200s alternate infinite;
    pointer-events: none;
  }
  .firefly::before,
  .firefly::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transform-origin: -10vw;
  }
  .firefly::before {
    background: var(--color-tertiary);
    opacity: 0.4;
    animation: drift ease alternate infinite;
  }
  .firefly::after {
    background: white;
    opacity: 0;
    box-shadow: 0 0 0vw 0vw var(--color-primary);
    animation:
      drift ease alternate infinite,
      flash ease infinite;
  }

  .firefly:nth-child(1) {
    animation-name: move1;
  }
  .firefly:nth-child(1)::before {
    animation-duration: 17s;
  }
  .firefly:nth-child(1)::after {
    animation-duration: 17s, 5880ms;
    animation-delay: 0ms, 5264ms;
  }

  @keyframes move1 {
    0% {
      transform: translateX(-47vw) translateY(-30vh) scale(0.98);
    }
    5.5555555556% {
      transform: translateX(-37vw) translateY(-7vh) scale(0.45);
    }
    11.1111111111% {
      transform: translateX(-49vw) translateY(9vh) scale(0.9);
    }
    16.6666666667% {
      transform: translateX(-7vw) translateY(50vh) scale(0.85);
    }
    22.2222222222% {
      transform: translateX(13vw) translateY(-15vh) scale(0.81);
    }
    27.7777777778% {
      transform: translateX(-13vw) translateY(39vh) scale(0.94);
    }
    33.3333333333% {
      transform: translateX(2vw) translateY(7vh) scale(0.56);
    }
    38.8888888889% {
      transform: translateX(15vw) translateY(26vh) scale(0.66);
    }
    44.4444444444% {
      transform: translateX(-19vw) translateY(-15vh) scale(0.65);
    }
    50% {
      transform: translateX(41vw) translateY(29vh) scale(0.37);
    }
    55.5555555556% {
      transform: translateX(-45vw) translateY(18vh) scale(0.89);
    }
    61.1111111111% {
      transform: translateX(-29vw) translateY(42vh) scale(0.74);
    }
    66.6666666667% {
      transform: translateX(-21vw) translateY(-5vh) scale(0.72);
    }
    72.2222222222% {
      transform: translateX(-44vw) translateY(11vh) scale(0.69);
    }
    77.7777777778% {
      transform: translateX(1vw) translateY(-31vh) scale(0.54);
    }
    83.3333333333% {
      transform: translateX(-38vw) translateY(-17vh) scale(0.48);
    }
    88.8888888889% {
      transform: translateX(-2vw) translateY(-27vh) scale(0.58);
    }
    94.4444444444% {
      transform: translateX(5vw) translateY(42vh) scale(0.55);
    }
    100% {
      transform: translateX(7vw) translateY(-24vh) scale(0.29);
    }
  }
  .firefly:nth-child(2) {
    animation-name: move2;
  }
  .firefly:nth-child(2)::before {
    animation-duration: 12s;
  }
  .firefly:nth-child(2)::after {
    animation-duration: 12s, 7650ms;
    animation-delay: 0ms, 5627ms;
  }

  @keyframes move2 {
    0% {
      transform: translateX(21vw) translateY(-31vh) scale(0.72);
    }
    4.5454545455% {
      transform: translateX(2vw) translateY(49vh) scale(0.92);
    }
    9.0909090909% {
      transform: translateX(-18vw) translateY(6vh) scale(0.86);
    }
    13.6363636364% {
      transform: translateX(35vw) translateY(19vh) scale(0.6);
    }
    18.1818181818% {
      transform: translateX(1vw) translateY(-24vh) scale(0.46);
    }
    22.7272727273% {
      transform: translateX(-47vw) translateY(1vh) scale(0.44);
    }
    27.2727272727% {
      transform: translateX(35vw) translateY(1vh) scale(0.8);
    }
    31.8181818182% {
      transform: translateX(34vw) translateY(49vh) scale(0.48);
    }
    36.3636363636% {
      transform: translateX(-46vw) translateY(-37vh) scale(0.61);
    }
    40.9090909091% {
      transform: translateX(24vw) translateY(40vh) scale(0.49);
    }
    45.4545454545% {
      transform: translateX(-30vw) translateY(-24vh) scale(0.87);
    }
    50% {
      transform: translateX(-43vw) translateY(-28vh) scale(0.55);
    }
    54.5454545455% {
      transform: translateX(-16vw) translateY(19vh) scale(0.76);
    }
    59.0909090909% {
      transform: translateX(-2vw) translateY(-11vh) scale(0.32);
    }
    63.6363636364% {
      transform: translateX(7vw) translateY(14vh) scale(0.45);
    }
    68.1818181818% {
      transform: translateX(31vw) translateY(36vh) scale(0.87);
    }
    72.7272727273% {
      transform: translateX(17vw) translateY(-37vh) scale(0.57);
    }
    77.2727272727% {
      transform: translateX(4vw) translateY(49vh) scale(0.38);
    }
    81.8181818182% {
      transform: translateX(44vw) translateY(-20vh) scale(0.29);
    }
    86.3636363636% {
      transform: translateX(-25vw) translateY(46vh) scale(0.97);
    }
    90.9090909091% {
      transform: translateX(-10vw) translateY(43vh) scale(0.28);
    }
    95.4545454545% {
      transform: translateX(-14vw) translateY(-14vh) scale(0.49);
    }
    100% {
      transform: translateX(16vw) translateY(-15vh) scale(0.9);
    }
  }
  .firefly:nth-child(3) {
    animation-name: move3;
  }
  .firefly:nth-child(3)::before {
    animation-duration: 18s;
  }
  .firefly:nth-child(3)::after {
    animation-duration: 18s, 6911ms;
    animation-delay: 0ms, 3931ms;
  }

  @keyframes move3 {
    0% {
      transform: translateX(-23vw) translateY(-33vh) scale(0.37);
    }
    4.7619047619% {
      transform: translateX(-40vw) translateY(33vh) scale(0.76);
    }
    9.5238095238% {
      transform: translateX(-12vw) translateY(37vh) scale(0.76);
    }
    14.2857142857% {
      transform: translateX(-40vw) translateY(24vh) scale(0.96);
    }
    19.0476190476% {
      transform: translateX(-1vw) translateY(-34vh) scale(0.88);
    }
    23.8095238095% {
      transform: translateX(18vw) translateY(-35vh) scale(0.9);
    }
    28.5714285714% {
      transform: translateX(-34vw) translateY(-10vh) scale(0.74);
    }
    33.3333333333% {
      transform: translateX(40vw) translateY(-25vh) scale(0.53);
    }
    38.0952380952% {
      transform: translateX(24vw) translateY(7vh) scale(0.72);
    }
    42.8571428571% {
      transform: translateX(12vw) translateY(36vh) scale(0.56);
    }
    47.619047619% {
      transform: translateX(-39vw) translateY(-14vh) scale(0.83);
    }
    52.380952381% {
      transform: translateX(10vw) translateY(-23vh) scale(0.68);
    }
    57.1428571429% {
      transform: translateX(37vw) translateY(-21vh) scale(0.69);
    }
    61.9047619048% {
      transform: translateX(10vw) translateY(0vh) scale(0.73);
    }
    66.6666666667% {
      transform: translateX(39vw) translateY(38vh) scale(0.94);
    }
    71.4285714286% {
      transform: translateX(-35vw) translateY(-46vh) scale(0.43);
    }
    76.1904761905% {
      transform: translateX(-48vw) translateY(-20vh) scale(0.83);
    }
    80.9523809524% {
      transform: translateX(44vw) translateY(27vh) scale(0.78);
    }
    85.7142857143% {
      transform: translateX(-42vw) translateY(17vh) scale(0.42);
    }
    90.4761904762% {
      transform: translateX(-20vw) translateY(42vh) scale(0.52);
    }
    95.2380952381% {
      transform: translateX(1vw) translateY(-14vh) scale(0.29);
    }
    100% {
      transform: translateX(33vw) translateY(-19vh) scale(0.66);
    }
  }
  .firefly:nth-child(4) {
    animation-name: move4;
  }
  .firefly:nth-child(4)::before {
    animation-duration: 13s;
  }
  .firefly:nth-child(4)::after {
    animation-duration: 13s, 10929ms;
    animation-delay: 0ms, 7732ms;
  }

  @keyframes move4 {
    0% {
      transform: translateX(12vw) translateY(-42vh) scale(0.72);
    }
    5.8823529412% {
      transform: translateX(-16vw) translateY(-25vh) scale(0.33);
    }
    11.7647058824% {
      transform: translateX(36vw) translateY(23vh) scale(0.94);
    }
    17.6470588235% {
      transform: translateX(-38vw) translateY(-47vh) scale(0.54);
    }
    23.5294117647% {
      transform: translateX(29vw) translateY(-6vh) scale(0.61);
    }
    29.4117647059% {
      transform: translateX(6vw) translateY(-24vh) scale(0.76);
    }
    35.2941176471% {
      transform: translateX(27vw) translateY(-14vh) scale(0.3);
    }
    41.1764705882% {
      transform: translateX(17vw) translateY(-2vh) scale(0.82);
    }
    47.0588235294% {
      transform: translateX(10vw) translateY(-1vh) scale(0.29);
    }
    52.9411764706% {
      transform: translateX(-36vw) translateY(-28vh) scale(0.98);
    }
    58.8235294118% {
      transform: translateX(-13vw) translateY(0vh) scale(0.83);
    }
    64.7058823529% {
      transform: translateX(41vw) translateY(18vh) scale(0.7);
    }
    70.5882352941% {
      transform: translateX(-24vw) translateY(-27vh) scale(0.31);
    }
    76.4705882353% {
      transform: translateX(34vw) translateY(7vh) scale(0.41);
    }
    82.3529411765% {
      transform: translateX(33vw) translateY(33vh) scale(0.96);
    }
    88.2352941176% {
      transform: translateX(3vw) translateY(-28vh) scale(0.6);
    }
    94.1176470588% {
      transform: translateX(11vw) translateY(9vh) scale(0.46);
    }
    100% {
      transform: translateX(-41vw) translateY(-19vh) scale(0.88);
    }
  }
  .firefly:nth-child(5) {
    animation-name: move5;
  }
  .firefly:nth-child(5)::before {
    animation-duration: 16s;
  }
  .firefly:nth-child(5)::after {
    animation-duration: 16s, 9669ms;
    animation-delay: 0ms, 8014ms;
  }

  @keyframes move5 {
    0% {
      transform: translateX(29vw) translateY(-22vh) scale(0.53);
    }
    4% {
      transform: translateX(24vw) translateY(-15vh) scale(0.3);
    }
    8% {
      transform: translateX(4vw) translateY(-49vh) scale(0.42);
    }
    12% {
      transform: translateX(-15vw) translateY(-45vh) scale(0.63);
    }
    16% {
      transform: translateX(45vw) translateY(-37vh) scale(0.88);
    }
    20% {
      transform: translateX(-46vw) translateY(-39vh) scale(0.97);
    }
    24% {
      transform: translateX(30vw) translateY(14vh) scale(0.6);
    }
    28% {
      transform: translateX(-18vw) translateY(28vh) scale(0.67);
    }
    32% {
      transform: translateX(1vw) translateY(26vh) scale(0.89);
    }
    36% {
      transform: translateX(-43vw) translateY(34vh) scale(0.4);
    }
    40% {
      transform: translateX(-8vw) translateY(3vh) scale(0.92);
    }
    44% {
      transform: translateX(44vw) translateY(29vh) scale(0.64);
    }
    48% {
      transform: translateX(-23vw) translateY(49vh) scale(0.66);
    }
    52% {
      transform: translateX(24vw) translateY(49vh) scale(0.73);
    }
    56% {
      transform: translateX(41vw) translateY(-33vh) scale(0.48);
    }
    60% {
      transform: translateX(30vw) translateY(-41vh) scale(0.71);
    }
    64% {
      transform: translateX(-46vw) translateY(-45vh) scale(0.79);
    }
    68% {
      transform: translateX(30vw) translateY(-3vh) scale(0.83);
    }
    72% {
      transform: translateX(-30vw) translateY(25vh) scale(0.49);
    }
    76% {
      transform: translateX(22vw) translateY(-8vh) scale(0.75);
    }
    80% {
      transform: translateX(46vw) translateY(50vh) scale(0.85);
    }
    84% {
      transform: translateX(-34vw) translateY(33vh) scale(0.69);
    }
    88% {
      transform: translateX(30vw) translateY(25vh) scale(0.44);
    }
    92% {
      transform: translateX(36vw) translateY(47vh) scale(0.3);
    }
    96% {
      transform: translateX(6vw) translateY(-19vh) scale(0.58);
    }
    100% {
      transform: translateX(-46vw) translateY(23vh) scale(0.61);
    }
  }
  .firefly:nth-child(6) {
    animation-name: move6;
  }
  .firefly:nth-child(6)::before {
    animation-duration: 18s;
  }
  .firefly:nth-child(6)::after {
    animation-duration: 18s, 9164ms;
    animation-delay: 0ms, 6455ms;
  }

  @keyframes move6 {
    0% {
      transform: translateX(-9vw) translateY(14vh) scale(0.51);
    }
    5.2631578947% {
      transform: translateX(16vw) translateY(-13vh) scale(0.36);
    }
    10.5263157895% {
      transform: translateX(7vw) translateY(-5vh) scale(0.87);
    }
    15.7894736842% {
      transform: translateX(-49vw) translateY(-1vh) scale(0.94);
    }
    21.0526315789% {
      transform: translateX(3vw) translateY(-43vh) scale(1);
    }
    26.3157894737% {
      transform: translateX(4vw) translateY(21vh) scale(0.9);
    }
    31.5789473684% {
      transform: translateX(21vw) translateY(-22vh) scale(0.29);
    }
    36.8421052632% {
      transform: translateX(11vw) translateY(-31vh) scale(0.31);
    }
    42.1052631579% {
      transform: translateX(34vw) translateY(14vh) scale(0.96);
    }
    47.3684210526% {
      transform: translateX(-30vw) translateY(-12vh) scale(0.33);
    }
    52.6315789474% {
      transform: translateX(49vw) translateY(-47vh) scale(0.34);
    }
    57.8947368421% {
      transform: translateX(-13vw) translateY(11vh) scale(0.51);
    }
    63.1578947368% {
      transform: translateX(-35vw) translateY(36vh) scale(0.6);
    }
    68.4210526316% {
      transform: translateX(-30vw) translateY(-47vh) scale(0.53);
    }
    73.6842105263% {
      transform: translateX(-10vw) translateY(-28vh) scale(0.32);
    }
    78.9473684211% {
      transform: translateX(12vw) translateY(30vh) scale(0.94);
    }
    84.2105263158% {
      transform: translateX(-25vw) translateY(0vh) scale(0.29);
    }
    89.4736842105% {
      transform: translateX(-32vw) translateY(-44vh) scale(0.99);
    }
    94.7368421053% {
      transform: translateX(-6vw) translateY(-45vh) scale(0.94);
    }
    100% {
      transform: translateX(-18vw) translateY(25vh) scale(0.57);
    }
  }
  .firefly:nth-child(7) {
    animation-name: move7;
  }
  .firefly:nth-child(7)::before {
    animation-duration: 12s;
  }
  .firefly:nth-child(7)::after {
    animation-duration: 12s, 5469ms;
    animation-delay: 0ms, 5477ms;
  }

  @keyframes move7 {
    0% {
      transform: translateX(43vw) translateY(11vh) scale(0.37);
    }
    3.7037037037% {
      transform: translateX(-14vw) translateY(-26vh) scale(0.97);
    }
    7.4074074074% {
      transform: translateX(4vw) translateY(30vh) scale(0.43);
    }
    11.1111111111% {
      transform: translateX(-31vw) translateY(-13vh) scale(0.91);
    }
    14.8148148148% {
      transform: translateX(50vw) translateY(-14vh) scale(0.56);
    }
    18.5185185185% {
      transform: translateX(-26vw) translateY(-2vh) scale(0.87);
    }
    22.2222222222% {
      transform: translateX(-35vw) translateY(-38vh) scale(0.7);
    }
    25.9259259259% {
      transform: translateX(8vw) translateY(14vh) scale(0.3);
    }
    29.6296296296% {
      transform: translateX(9vw) translateY(-33vh) scale(0.68);
    }
    33.3333333333% {
      transform: translateX(17vw) translateY(7vh) scale(0.72);
    }
    37.037037037% {
      transform: translateX(19vw) translateY(-30vh) scale(0.59);
    }
    40.7407407407% {
      transform: translateX(14vw) translateY(-11vh) scale(0.88);
    }
    44.4444444444% {
      transform: translateX(-16vw) translateY(13vh) scale(0.85);
    }
    48.1481481481% {
      transform: translateX(18vw) translateY(-7vh) scale(0.36);
    }
    51.8518518519% {
      transform: translateX(-21vw) translateY(-12vh) scale(0.64);
    }
    55.5555555556% {
      transform: translateX(-23vw) translateY(-3vh) scale(0.5);
    }
    59.2592592593% {
      transform: translateX(42vw) translateY(25vh) scale(0.89);
    }
    62.962962963% {
      transform: translateX(6vw) translateY(-4vh) scale(0.26);
    }
    66.6666666667% {
      transform: translateX(-49vw) translateY(23vh) scale(0.72);
    }
    70.3703703704% {
      transform: translateX(-29vw) translateY(28vh) scale(0.65);
    }
    74.0740740741% {
      transform: translateX(-2vw) translateY(-11vh) scale(0.72);
    }
    77.7777777778% {
      transform: translateX(22vw) translateY(-13vh) scale(0.54);
    }
    81.4814814815% {
      transform: translateX(-30vw) translateY(32vh) scale(0.51);
    }
    85.1851851852% {
      transform: translateX(9vw) translateY(41vh) scale(0.49);
    }
    88.8888888889% {
      transform: translateX(-7vw) translateY(-13vh) scale(0.43);
    }
    92.5925925926% {
      transform: translateX(-27vw) translateY(-43vh) scale(0.53);
    }
    96.2962962963% {
      transform: translateX(34vw) translateY(50vh) scale(0.48);
    }
    100% {
      transform: translateX(-5vw) translateY(32vh) scale(0.51);
    }
  }
  .firefly:nth-child(8) {
    animation-name: move8;
  }
  .firefly:nth-child(8)::before {
    animation-duration: 16s;
  }
  .firefly:nth-child(8)::after {
    animation-duration: 16s, 9307ms;
    animation-delay: 0ms, 1482ms;
  }

  @keyframes move8 {
    0% {
      transform: translateX(-4vw) translateY(7vh) scale(0.33);
    }
    4.7619047619% {
      transform: translateX(1vw) translateY(15vh) scale(0.78);
    }
    9.5238095238% {
      transform: translateX(-14vw) translateY(18vh) scale(0.34);
    }
    14.2857142857% {
      transform: translateX(-12vw) translateY(-41vh) scale(0.87);
    }
    19.0476190476% {
      transform: translateX(39vw) translateY(-40vh) scale(0.48);
    }
    23.8095238095% {
      transform: translateX(-22vw) translateY(17vh) scale(0.62);
    }
    28.5714285714% {
      transform: translateX(28vw) translateY(38vh) scale(0.28);
    }
    33.3333333333% {
      transform: translateX(24vw) translateY(-27vh) scale(0.88);
    }
    38.0952380952% {
      transform: translateX(50vw) translateY(-16vh) scale(0.76);
    }
    42.8571428571% {
      transform: translateX(-23vw) translateY(-45vh) scale(0.72);
    }
    47.619047619% {
      transform: translateX(-8vw) translateY(-11vh) scale(0.89);
    }
    52.380952381% {
      transform: translateX(-33vw) translateY(41vh) scale(0.92);
    }
    57.1428571429% {
      transform: translateX(38vw) translateY(6vh) scale(0.9);
    }
    61.9047619048% {
      transform: translateX(36vw) translateY(45vh) scale(0.67);
    }
    66.6666666667% {
      transform: translateX(-4vw) translateY(6vh) scale(0.46);
    }
    71.4285714286% {
      transform: translateX(47vw) translateY(-12vh) scale(0.34);
    }
    76.1904761905% {
      transform: translateX(3vw) translateY(19vh) scale(0.89);
    }
    80.9523809524% {
      transform: translateX(0vw) translateY(44vh) scale(0.47);
    }
    85.7142857143% {
      transform: translateX(-14vw) translateY(33vh) scale(0.93);
    }
    90.4761904762% {
      transform: translateX(46vw) translateY(-44vh) scale(0.35);
    }
    95.2380952381% {
      transform: translateX(-25vw) translateY(-31vh) scale(0.52);
    }
    100% {
      transform: translateX(35vw) translateY(44vh) scale(0.83);
    }
  }
  .firefly:nth-child(9) {
    animation-name: move9;
  }
  .firefly:nth-child(9)::before {
    animation-duration: 11s;
  }
  .firefly:nth-child(9)::after {
    animation-duration: 11s, 7846ms;
    animation-delay: 0ms, 4584ms;
  }

  @keyframes move9 {
    0% {
      transform: translateX(-38vw) translateY(46vh) scale(0.95);
    }
    3.8461538462% {
      transform: translateX(43vw) translateY(-21vh) scale(0.85);
    }
    7.6923076923% {
      transform: translateX(36vw) translateY(-25vh) scale(0.8);
    }
    11.5384615385% {
      transform: translateX(12vw) translateY(9vh) scale(0.38);
    }
    15.3846153846% {
      transform: translateX(-30vw) translateY(46vh) scale(0.34);
    }
    19.2307692308% {
      transform: translateX(-42vw) translateY(-35vh) scale(0.54);
    }
    23.0769230769% {
      transform: translateX(1vw) translateY(11vh) scale(0.65);
    }
    26.9230769231% {
      transform: translateX(46vw) translateY(-47vh) scale(0.95);
    }
    30.7692307692% {
      transform: translateX(3vw) translateY(-2vh) scale(0.41);
    }
    34.6153846154% {
      transform: translateX(37vw) translateY(31vh) scale(0.27);
    }
    38.4615384615% {
      transform: translateX(-29vw) translateY(3vh) scale(0.52);
    }
    42.3076923077% {
      transform: translateX(-29vw) translateY(-38vh) scale(0.48);
    }
    46.1538461538% {
      transform: translateX(-10vw) translateY(-39vh) scale(0.36);
    }
    50% {
      transform: translateX(-3vw) translateY(-9vh) scale(0.36);
    }
    53.8461538462% {
      transform: translateX(45vw) translateY(2vh) scale(0.53);
    }
    57.6923076923% {
      transform: translateX(43vw) translateY(-17vh) scale(0.85);
    }
    61.5384615385% {
      transform: translateX(-33vw) translateY(7vh) scale(0.31);
    }
    65.3846153846% {
      transform: translateX(-3vw) translateY(-34vh) scale(0.72);
    }
    69.2307692308% {
      transform: translateX(48vw) translateY(-32vh) scale(0.4);
    }
    73.0769230769% {
      transform: translateX(19vw) translateY(-14vh) scale(0.91);
    }
    76.9230769231% {
      transform: translateX(8vw) translateY(-42vh) scale(0.78);
    }
    80.7692307692% {
      transform: translateX(-23vw) translateY(29vh) scale(0.57);
    }
    84.6153846154% {
      transform: translateX(30vw) translateY(-4vh) scale(0.34);
    }
    88.4615384615% {
      transform: translateX(14vw) translateY(9vh) scale(0.85);
    }
    92.3076923077% {
      transform: translateX(22vw) translateY(-33vh) scale(0.83);
    }
    96.1538461538% {
      transform: translateX(15vw) translateY(27vh) scale(1);
    }
    100% {
      transform: translateX(34vw) translateY(49vh) scale(0.37);
    }
  }
  .firefly:nth-child(10) {
    animation-name: move10;
  }
  .firefly:nth-child(10)::before {
    animation-duration: 10s;
  }
  .firefly:nth-child(10)::after {
    animation-duration: 10s, 10028ms;
    animation-delay: 0ms, 4517ms;
  }

  @keyframes move10 {
    0% {
      transform: translateX(43vw) translateY(12vh) scale(0.86);
    }
    5% {
      transform: translateX(33vw) translateY(-36vh) scale(0.89);
    }
    10% {
      transform: translateX(-44vw) translateY(14vh) scale(0.41);
    }
    15% {
      transform: translateX(20vw) translateY(-22vh) scale(0.87);
    }
    20% {
      transform: translateX(30vw) translateY(18vh) scale(0.54);
    }
    25% {
      transform: translateX(8vw) translateY(29vh) scale(0.97);
    }
    30% {
      transform: translateX(48vw) translateY(-3vh) scale(0.97);
    }
    35% {
      transform: translateX(-29vw) translateY(29vh) scale(0.33);
    }
    40% {
      transform: translateX(-22vw) translateY(21vh) scale(0.28);
    }
    45% {
      transform: translateX(-17vw) translateY(41vh) scale(0.67);
    }
    50% {
      transform: translateX(47vw) translateY(-33vh) scale(0.93);
    }
    55% {
      transform: translateX(49vw) translateY(31vh) scale(0.55);
    }
    60% {
      transform: translateX(-8vw) translateY(-9vh) scale(0.28);
    }
    65% {
      transform: translateX(-21vw) translateY(-15vh) scale(0.8);
    }
    70% {
      transform: translateX(48vw) translateY(9vh) scale(0.35);
    }
    75% {
      transform: translateX(-14vw) translateY(-21vh) scale(0.89);
    }
    80% {
      transform: translateX(0vw) translateY(21vh) scale(0.72);
    }
    85% {
      transform: translateX(12vw) translateY(-22vh) scale(0.88);
    }
    90% {
      transform: translateX(-1vw) translateY(-5vh) scale(0.69);
    }
    95% {
      transform: translateX(-18vw) translateY(-38vh) scale(0.3);
    }
    100% {
      transform: translateX(-30vw) translateY(14vh) scale(0.95);
    }
  }
  .firefly:nth-child(11) {
    animation-name: move11;
  }
  .firefly:nth-child(11)::before {
    animation-duration: 18s;
  }
  .firefly:nth-child(11)::after {
    animation-duration: 18s, 8871ms;
    animation-delay: 0ms, 1817ms;
  }

  @keyframes move11 {
    0% {
      transform: translateX(26vw) translateY(43vh) scale(0.36);
    }
    5.8823529412% {
      transform: translateX(46vw) translateY(10vh) scale(0.47);
    }
    11.7647058824% {
      transform: translateX(-23vw) translateY(-7vh) scale(0.94);
    }
    17.6470588235% {
      transform: translateX(-21vw) translateY(34vh) scale(0.93);
    }
    23.5294117647% {
      transform: translateX(27vw) translateY(39vh) scale(0.51);
    }
    29.4117647059% {
      transform: translateX(-46vw) translateY(-48vh) scale(0.43);
    }
    35.2941176471% {
      transform: translateX(-22vw) translateY(-29vh) scale(0.33);
    }
    41.1764705882% {
      transform: translateX(-3vw) translateY(-46vh) scale(0.66);
    }
    47.0588235294% {
      transform: translateX(27vw) translateY(-42vh) scale(0.29);
    }
    52.9411764706% {
      transform: translateX(23vw) translateY(-30vh) scale(0.44);
    }
    58.8235294118% {
      transform: translateX(20vw) translateY(-19vh) scale(0.74);
    }
    64.7058823529% {
      transform: translateX(-36vw) translateY(-16vh) scale(0.36);
    }
    70.5882352941% {
      transform: translateX(26vw) translateY(25vh) scale(0.36);
    }
    76.4705882353% {
      transform: translateX(47vw) translateY(35vh) scale(0.26);
    }
    82.3529411765% {
      transform: translateX(26vw) translateY(15vh) scale(0.58);
    }
    88.2352941176% {
      transform: translateX(-17vw) translateY(1vh) scale(0.32);
    }
    94.1176470588% {
      transform: translateX(20vw) translateY(34vh) scale(1);
    }
    100% {
      transform: translateX(-33vw) translateY(-6vh) scale(0.43);
    }
  }
  .firefly:nth-child(12) {
    animation-name: move12;
  }
  .firefly:nth-child(12)::before {
    animation-duration: 9s;
  }
  .firefly:nth-child(12)::after {
    animation-duration: 9s, 8637ms;
    animation-delay: 0ms, 3120ms;
  }

  @keyframes move12 {
    0% {
      transform: translateX(3vw) translateY(48vh) scale(1);
    }
    5.2631578947% {
      transform: translateX(47vw) translateY(43vh) scale(0.55);
    }
    10.5263157895% {
      transform: translateX(18vw) translateY(-8vh) scale(0.6);
    }
    15.7894736842% {
      transform: translateX(-37vw) translateY(11vh) scale(0.47);
    }
    21.0526315789% {
      transform: translateX(-20vw) translateY(29vh) scale(0.62);
    }
    26.3157894737% {
      transform: translateX(43vw) translateY(35vh) scale(0.83);
    }
    31.5789473684% {
      transform: translateX(38vw) translateY(4vh) scale(0.65);
    }
    36.8421052632% {
      transform: translateX(20vw) translateY(21vh) scale(0.75);
    }
    42.1052631579% {
      transform: translateX(7vw) translateY(13vh) scale(0.65);
    }
    47.3684210526% {
      transform: translateX(19vw) translateY(-3vh) scale(0.47);
    }
    52.6315789474% {
      transform: translateX(-37vw) translateY(-15vh) scale(0.38);
    }
    57.8947368421% {
      transform: translateX(-9vw) translateY(-24vh) scale(0.7);
    }
    63.1578947368% {
      transform: translateX(9vw) translateY(31vh) scale(0.34);
    }
    68.4210526316% {
      transform: translateX(-41vw) translateY(-5vh) scale(0.92);
    }
    73.6842105263% {
      transform: translateX(9vw) translateY(-33vh) scale(1);
    }
    78.9473684211% {
      transform: translateX(-17vw) translateY(-4vh) scale(0.85);
    }
    84.2105263158% {
      transform: translateX(-33vw) translateY(36vh) scale(0.26);
    }
    89.4736842105% {
      transform: translateX(23vw) translateY(-35vh) scale(0.89);
    }
    94.7368421053% {
      transform: translateX(1vw) translateY(32vh) scale(0.58);
    }
    100% {
      transform: translateX(48vw) translateY(-11vh) scale(0.39);
    }
  }
  .firefly:nth-child(13) {
    animation-name: move13;
  }
  .firefly:nth-child(13)::before {
    animation-duration: 10s;
  }
  .firefly:nth-child(13)::after {
    animation-duration: 10s, 6192ms;
    animation-delay: 0ms, 1656ms;
  }

  @keyframes move13 {
    0% {
      transform: translateX(-4vw) translateY(-6vh) scale(0.58);
    }
    3.5714285714% {
      transform: translateX(34vw) translateY(-12vh) scale(0.56);
    }
    7.1428571429% {
      transform: translateX(-39vw) translateY(18vh) scale(0.42);
    }
    10.7142857143% {
      transform: translateX(30vw) translateY(31vh) scale(0.38);
    }
    14.2857142857% {
      transform: translateX(-36vw) translateY(11vh) scale(0.96);
    }
    17.8571428571% {
      transform: translateX(32vw) translateY(17vh) scale(0.9);
    }
    21.4285714286% {
      transform: translateX(-47vw) translateY(28vh) scale(0.77);
    }
    25% {
      transform: translateX(29vw) translateY(-32vh) scale(0.93);
    }
    28.5714285714% {
      transform: translateX(-11vw) translateY(-25vh) scale(0.82);
    }
    32.1428571429% {
      transform: translateX(-13vw) translateY(-19vh) scale(0.75);
    }
    35.7142857143% {
      transform: translateX(18vw) translateY(3vh) scale(0.84);
    }
    39.2857142857% {
      transform: translateX(7vw) translateY(-11vh) scale(0.56);
    }
    42.8571428571% {
      transform: translateX(49vw) translateY(-2vh) scale(0.57);
    }
    46.4285714286% {
      transform: translateX(-24vw) translateY(35vh) scale(0.84);
    }
    50% {
      transform: translateX(17vw) translateY(40vh) scale(0.85);
    }
    53.5714285714% {
      transform: translateX(-45vw) translateY(-34vh) scale(0.9);
    }
    57.1428571429% {
      transform: translateX(-38vw) translateY(-35vh) scale(0.98);
    }
    60.7142857143% {
      transform: translateX(-43vw) translateY(46vh) scale(0.33);
    }
    64.2857142857% {
      transform: translateX(4vw) translateY(24vh) scale(0.54);
    }
    67.8571428571% {
      transform: translateX(-36vw) translateY(16vh) scale(0.49);
    }
    71.4285714286% {
      transform: translateX(-39vw) translateY(49vh) scale(0.44);
    }
    75% {
      transform: translateX(-28vw) translateY(-22vh) scale(0.99);
    }
    78.5714285714% {
      transform: translateX(-47vw) translateY(-46vh) scale(0.93);
    }
    82.1428571429% {
      transform: translateX(18vw) translateY(-2vh) scale(0.88);
    }
    85.7142857143% {
      transform: translateX(-31vw) translateY(-12vh) scale(0.86);
    }
    89.2857142857% {
      transform: translateX(17vw) translateY(9vh) scale(0.38);
    }
    92.8571428571% {
      transform: translateX(39vw) translateY(-10vh) scale(0.97);
    }
    96.4285714286% {
      transform: translateX(4vw) translateY(25vh) scale(0.89);
    }
    100% {
      transform: translateX(16vw) translateY(-23vh) scale(0.47);
    }
  }
  .firefly:nth-child(14) {
    animation-name: move14;
  }
  .firefly:nth-child(14)::before {
    animation-duration: 18s;
  }
  .firefly:nth-child(14)::after {
    animation-duration: 18s, 6066ms;
    animation-delay: 0ms, 1210ms;
  }

  @keyframes move14 {
    0% {
      transform: translateX(-19vw) translateY(31vh) scale(0.88);
    }
    4% {
      transform: translateX(2vw) translateY(43vh) scale(0.64);
    }
    8% {
      transform: translateX(47vw) translateY(43vh) scale(0.29);
    }
    12% {
      transform: translateX(30vw) translateY(32vh) scale(0.79);
    }
    16% {
      transform: translateX(-42vw) translateY(-1vh) scale(0.69);
    }
    20% {
      transform: translateX(-41vw) translateY(47vh) scale(0.42);
    }
    24% {
      transform: translateX(38vw) translateY(1vh) scale(0.97);
    }
    28% {
      transform: translateX(24vw) translateY(12vh) scale(0.55);
    }
    32% {
      transform: translateX(-48vw) translateY(39vh) scale(0.27);
    }
    36% {
      transform: translateX(25vw) translateY(50vh) scale(0.78);
    }
    40% {
      transform: translateX(35vw) translateY(-45vh) scale(0.68);
    }
    44% {
      transform: translateX(-7vw) translateY(-23vh) scale(0.99);
    }
    48% {
      transform: translateX(34vw) translateY(-6vh) scale(0.8);
    }
    52% {
      transform: translateX(23vw) translateY(18vh) scale(0.47);
    }
    56% {
      transform: translateX(20vw) translateY(-38vh) scale(0.9);
    }
    60% {
      transform: translateX(29vw) translateY(-26vh) scale(0.82);
    }
    64% {
      transform: translateX(27vw) translateY(27vh) scale(1);
    }
    68% {
      transform: translateX(9vw) translateY(47vh) scale(0.86);
    }
    72% {
      transform: translateX(21vw) translateY(26vh) scale(0.65);
    }
    76% {
      transform: translateX(7vw) translateY(-37vh) scale(0.87);
    }
    80% {
      transform: translateX(47vw) translateY(-29vh) scale(0.82);
    }
    84% {
      transform: translateX(21vw) translateY(-23vh) scale(0.91);
    }
    88% {
      transform: translateX(46vw) translateY(-4vh) scale(0.81);
    }
    92% {
      transform: translateX(26vw) translateY(-7vh) scale(0.59);
    }
    96% {
      transform: translateX(25vw) translateY(-37vh) scale(0.63);
    }
    100% {
      transform: translateX(27vw) translateY(24vh) scale(0.65);
    }
  }
  .firefly:nth-child(15) {
    animation-name: move15;
  }
  .firefly:nth-child(15)::before {
    animation-duration: 9s;
  }
  .firefly:nth-child(15)::after {
    animation-duration: 9s, 7282ms;
    animation-delay: 0ms, 7575ms;
  }

  @keyframes move15 {
    0% {
      transform: translateX(33vw) translateY(38vh) scale(0.42);
    }
    4.347826087% {
      transform: translateX(11vw) translateY(6vh) scale(0.38);
    }
    8.6956521739% {
      transform: translateX(6vw) translateY(-23vh) scale(0.38);
    }
    13.0434782609% {
      transform: translateX(-44vw) translateY(27vh) scale(0.32);
    }
    17.3913043478% {
      transform: translateX(32vw) translateY(-47vh) scale(0.66);
    }
    21.7391304348% {
      transform: translateX(-41vw) translateY(-3vh) scale(0.93);
    }
    26.0869565217% {
      transform: translateX(-40vw) translateY(-20vh) scale(0.35);
    }
    30.4347826087% {
      transform: translateX(30vw) translateY(-15vh) scale(0.28);
    }
    34.7826086957% {
      transform: translateX(24vw) translateY(-11vh) scale(0.49);
    }
    39.1304347826% {
      transform: translateX(0vw) translateY(-45vh) scale(0.65);
    }
    43.4782608696% {
      transform: translateX(10vw) translateY(45vh) scale(0.31);
    }
    47.8260869565% {
      transform: translateX(39vw) translateY(20vh) scale(0.56);
    }
    52.1739130435% {
      transform: translateX(25vw) translateY(-25vh) scale(0.46);
    }
    56.5217391304% {
      transform: translateX(40vw) translateY(-43vh) scale(0.3);
    }
    60.8695652174% {
      transform: translateX(-11vw) translateY(17vh) scale(0.44);
    }
    65.2173913043% {
      transform: translateX(2vw) translateY(-49vh) scale(0.3);
    }
    69.5652173913% {
      transform: translateX(-42vw) translateY(-46vh) scale(0.35);
    }
    73.9130434783% {
      transform: translateX(23vw) translateY(48vh) scale(0.32);
    }
    78.2608695652% {
      transform: translateX(17vw) translateY(43vh) scale(0.85);
    }
    82.6086956522% {
      transform: translateX(43vw) translateY(15vh) scale(0.67);
    }
    86.9565217391% {
      transform: translateX(-23vw) translateY(22vh) scale(0.78);
    }
    91.3043478261% {
      transform: translateX(-23vw) translateY(28vh) scale(0.95);
    }
    95.652173913% {
      transform: translateX(-37vw) translateY(23vh) scale(0.65);
    }
    100% {
      transform: translateX(34vw) translateY(-29vh) scale(0.92);
    }
  }
  @keyframes drift {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes flash {
    0%,
    30%,
    100% {
      opacity: 0;
      box-shadow: 0 0 0vw 0vw var(--color-primary);
    }
    5% {
      opacity: 1;
      box-shadow: 0 0 2vw 0.4vw var(--color-primary);
    }
  }
</style>
