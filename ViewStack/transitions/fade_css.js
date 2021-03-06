define(function () {
	/* jshint multistr: true */
	/* jshint -W015 */
	/* jshint -W033 */
	return "\
.-d-view-stack-fade {\
  -webkit-transition-property: none;\
  -moz-transition-property: none;\
  transition-property: none;\
  -webkit-transition-duration: 0s;\
  -moz-transition-duration: 0s;\
  transition-duration: 0s;\
}\
.-d-view-stack-fade.-d-view-stack-transition {\
  -webkit-transition-property: opacity;\
  -moz-transition-property: opacity;\
  transition-property: opacity;\
  -webkit-transition-duration: 0.6s;\
  -moz-transition-duration: 0.6s;\
  transition-duration: 0.6s;\
}\
.-d-view-stack-fade.-d-view-stack-out {\
  opacity: 1;\
}\
.-d-view-stack-fade.-d-view-stack-out.-d-view-stack-transition {\
  -webkit-transition-timing-function: ease-out;\
  -moz-transition-timing-function: ease-out;\
  transition-timing-function: ease-out;\
  opacity: 0;\
}\
.-d-view-stack-fade.-d-view-stack-in {\
  opacity: 0;\
}\
.-d-view-stack-fade.-d-view-stack-in.-d-view-stack-transition {\
  -webkit-transition-timing-function: ease-in;\
  -moz-transition-timing-function: ease-in;\
  transition-timing-function: ease-in;\
  opacity: 1;\
}";
});
