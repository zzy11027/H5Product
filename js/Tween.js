var t1 = new TimelineMax({paused: true}),
		t2 = new TimelineMax({paused: true}),
		t3 = new TimelineMax({paused: true,}),
		// t3 = new TimelineMax({paused: true,repeat: 1,yoyo: true}),
		t4 = new TimelineMax({paused: true}),
		t5 = new TimelineMax({paused: true});
t1.from('.dialogue1', 1, {left:-20}, 1)
	.from('.dialogue2', 3, {autoAlpha:0}, 0)
	.from('.dialogue3', 1, {right:-20}, 0)
	.from('.dialogue4', 3, {autoAlpha:0}, 0);
t2.from('.dialogue5', 1, {autoAlpha:0}, 0)
  .from('.dialogue6', 2, {right:-20}, 0)
  // .from('.dialogue7', 2, {left:-20}, 0)
  .from('.dialogue8', 1, {autoAlpha:0}, 0);
t3.from('.dialogue9', 1, {left:20}, 0)
  .from('.dialogue10', 2, {autoAlpha:0}, 0)
  .from('.dialogue11', 2, {autoAlpha:0}, 0)
  .from('.dialogue12', 1, {left:-20}, 0)

  .to('.word1', 1, {autoAlpha:0,}, 1)
  .to('.word2', 1, {autoAlpha:0,}, 2)
  .from('.word3', 1, {autoAlpha:0,}, 3)
  .from('.word4', 1, {autoAlpha:0,}, 4)
  .from('.word5', 1, {autoAlpha:0,}, 5)
  .to('.word6', 1, {autoAlpha:0,}, 6)
  .from('.word7', 1, {autoAlpha:0,}, 7)
  .from('.word8', 1, {autoAlpha:0,}, 8)
  .from('.word9', 1, {autoAlpha:0,}, 9);

t4.from('.dialogue13', 1, {autoAlpha:0}, 0)
  .from('.dialogue14', 2, {right:-50}, 0)
  .from('.dialogue15', 2, {right:-10}, 0)
  .from('.dialogue16', 1, {autoAlpha:0}, 0);

t5.from('.dialogue17', 1, {left:-64}, 0)
  .from('.dialogue18', 2, {autoAlpha:0}, 0)
  .from('.dialogue19', 2, {autoAlpha:0}, 0)
  .from('.dialogue20', 1, {right:-15}, 0)
