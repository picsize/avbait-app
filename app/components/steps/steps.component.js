
avBait.component('steps', {
    templateUrl: '/app/components/steps/steps.component.html',
    controller: function ($scope) {
        $scope.setStepsAnimation = function () {
            $(window).resize(function () {
                $('.show-content').height($(window).height());
            }).resize();
            var ctrl = new ScrollMagic.Controller({});
            var scene = new ScrollMagic.Scene({
                duration: 5000,
                offset: 0,
                reverse: true,
                triggerHook: "onLeave",
                triggerElement: '#trigger-start'
            })
                .setTween($scope.createShowTM())
                .setPin('#steps')
                .addTo(ctrl);
        },

        $scope.createShowTM = function () {
            var tm = new TimelineMax();
            var items = $('.show-item');
            var images = $('.images-scene img');

            items.each(function (i) {
                var innerTM = new TimelineMax();
                var item = items.eq(i);
                var image = images.eq(i);
                var preImage = images.eq(i - 1);

                if (i === 0) {
                    innerTM.set([item, image], { className: '+=active', ease: Cubic.easeInOut })
                } else {
                    $scope.doAnimation(i, item, image, preImage, innerTM);
                }

                if (i === items.length - 1) {
                    innerTM.to([item, image], 3, { delay: 3 });
                } else {
                    innerTM.to([item, image], 3, { className: '-=active', delay: 3 });
                };


                tm.add(innerTM);
            });
            return tm;
        },

        $scope.doAnimation = function (i, item, image, preImage, innerTM) {
            console.log(i, [$(image), $(preImage), ]);
            if (i === 1) {
                innerTM.from(item, 3, { opacity: 0, left: '82rem', ease: Power0.easeOut }, 'slide1')
                    .to(item, 3, { opacity: 1, left: 0, ease: Power0.easeOut }, 'slide1');
                innerTM.from(image, 3, { opacity: 0, display:'none', left: '-80rem', ease: Power0.easeOut }, 'slide1')
                    .to(image, 3, { opacity: 1, display: 'block', left: '7rem', ease: Power0.easeOut }, 'slide1');
                innerTM.from(preImage, 3, { left: '7rem', display: 'block', ease: Power0.easeOut }, 'slide1')
                    .to(preImage, 3, { opacity: 0, display: 'none', left: '-80rem', ease: Power0.easeOut }, 'slide1');
            }
            if (i === 2) {
                innerTM.from(item, 3, { opacity: 0, left: '82rem', ease: Power0.easeOut }, 'slide2')
                    .to(item, 3, { opacity: 1, left: 0, ease: Power0.easeOut }, 'slide2');
                innerTM.from(image, 3, { opacity: 0, display: 'none', left: '-80rem', ease: Power0.easeOut }, 'slide2')
                    .to(image, 3, { opacity: 1, display: 'block', left: '7rem', ease: Power0.easeOut }, 'slide2');
                innerTM.from(preImage, 3, { left: '7rem', display: 'block', ease: Power0.easeOut }, 'slide2')
                    .to(preImage, 3, { opacity: 0, display: 'none', left: '-80rem', ease: Power0.easeOut }, 'slide2');

            }
            if (i === 3) {
                innerTM.from(item, 3, { opacity: 0, left: '82rem', ease: Power0.easeOut }, 'slide3')
                    .to(item, 3, { opacity: 1, left: 0, ease: Power0.easeOut }, 'slide3');
                innerTM.from(image, 3, { opacity: 0, display: 'none', left: '-80rem', ease: Power0.easeOut }, 'slide3')
                    .to(image, 3, { opacity: 1, display: 'block', left: '7rem', ease: Power0.easeOut }, 'slide3');
                innerTM.from(preImage, 3, { left: '7rem', display: 'block', ease: Power0.easeOut }, 'slide3')
                    .to(preImage, 3, { opacity: 0, display: 'none', left: '-80rem', ease: Power0.easeOut }, 'slide3');
            }

            //innerTM.to(item, 3, { className: '+=active', delay: 0.4, ease: Cubic.easeInOut });
        }

        $scope.setStepsAnimation();
    }
});