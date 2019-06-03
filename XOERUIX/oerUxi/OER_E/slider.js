var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _templateObject = _taggedTemplateLiteral(['\n  height: 300px;\n  position: relative;\n  transform-style: preserve-3d;\n  width: 200px;\n'], ['\n  height: 300px;\n  position: relative;\n  transform-style: preserve-3d;\n  width: 200px;\n']),_templateObject2 = _taggedTemplateLiteral(['\n  border-radius: 6px;\n  height: 100%;\n  left: 0;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  filter: grayscale(1) drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.15));\n  transform: scale(0) translate(0, 0);\n  transition: transform 0.5s, filter 0.5s, z-index 0.5s;\n  width: 100%;\n  ', '\n  z-index: -1;\n\n  &[data-gone="true"] .content-mark {\n    clip-path: polygon(100% 70%, 0% 30%, 0% 100%, 100% 100%);\n  }\n  &[data-coming="true"] .content-mark {\n    clip-path: polygon(100% 30%, 0% 70%, 0% 100%, 100% 100%);\n  }\n'], ['\n  border-radius: 6px;\n  height: 100%;\n  left: 0;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  filter: grayscale(1) drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.15));\n  transform: scale(0) translate(0, 0);\n  transition: transform 0.5s, filter 0.5s, z-index 0.5s;\n  width: 100%;\n  ', '\n  z-index: -1;\n\n  &[data-gone="true"] .content-mark {\n    clip-path: polygon(100% 70%, 0% 30%, 0% 100%, 100% 100%);\n  }\n  &[data-coming="true"] .content-mark {\n    clip-path: polygon(100% 30%, 0% 70%, 0% 100%, 100% 100%);\n  }\n']),_templateObject3 = _taggedTemplateLiteral(['\n  background: #87d37c;\n  border-radius: 100%;\n  height: 60px;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 60px;\n'], ['\n  background: #87d37c;\n  border-radius: 100%;\n  height: 60px;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 60px;\n']),_templateObject4 = _taggedTemplateLiteral(['\n  background: #db0a5b;\n  height: 70%;\n  object-fit: cover;\n  width: 100%;\n'], ['\n  background: #db0a5b;\n  height: 70%;\n  object-fit: cover;\n  width: 100%;\n']),_templateObject5 = _taggedTemplateLiteral(['\n  background-color: ', ';\n  bottom: 0;\n  clip-path: polygon(100% 50%, 0% 50%, 0% 100%, 100% 100%);\n  height: 100%;\n  left: -1px;\n  position: absolute;\n  right: -1px;\n  transition: clip-path 0.5s, background 0.5s;\n'], ['\n  background-color: ', ';\n  bottom: 0;\n  clip-path: polygon(100% 50%, 0% 50%, 0% 100%, 100% 100%);\n  height: 100%;\n  left: -1px;\n  position: absolute;\n  right: -1px;\n  transition: clip-path 0.5s, background 0.5s;\n']),_templateObject6 = _taggedTemplateLiteral(['\n  bottom: 0;\n  height: 50%;\n  left: 0;\n  padding: 30px 10px 10px 10px;\n  position: absolute;\n  right: 0;\n'], ['\n  bottom: 0;\n  height: 50%;\n  left: 0;\n  padding: 30px 10px 10px 10px;\n  position: absolute;\n  right: 0;\n']),_templateObject7 = _taggedTemplateLiteral(['\n  align-items: center;\n  color: #111;\n  display: flex;\n  font-family: \'HelveticaNeue-Light\', \'Helvetica Neue Light\', \'Helvetica Neue\',\n    Helvetica, Arial, \'Lucida Grande\', sans-serif;\n  font-size: 1.25rem;\n  height: 5rem;\n  justify-content: center;\n  margin: 10px 0 0 0;\n  padding: 0;\n  text-align: center;\n'], ['\n  align-items: center;\n  color: #111;\n  display: flex;\n  font-family: \'HelveticaNeue-Light\', \'Helvetica Neue Light\', \'Helvetica Neue\',\n    Helvetica, Arial, \'Lucida Grande\', sans-serif;\n  font-size: 1.25rem;\n  height: 5rem;\n  justify-content: center;\n  margin: 10px 0 0 0;\n  padding: 0;\n  text-align: center;\n']),_templateObject8 = _taggedTemplateLiteral(['\n  bottom: 10px;\n  color: ', ';\n  font-family: \'HelveticaNeue-Light\', \'Helvetica Neue Light\', \'Helvetica Neue\',\n    Helvetica, Arial, \'Lucida Grande\', sans-serif;\n  font-size: 0.75rem;\n  font-weight: 300;\n  left: 0;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  text-align: center;\n  text-transform: uppercase;\n  transition: color 0.5s;\n  width: 100%;\n'], ['\n  bottom: 10px;\n  color: ', ';\n  font-family: \'HelveticaNeue-Light\', \'Helvetica Neue Light\', \'Helvetica Neue\',\n    Helvetica, Arial, \'Lucida Grande\', sans-serif;\n  font-size: 0.75rem;\n  font-weight: 300;\n  left: 0;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  text-align: center;\n  text-transform: uppercase;\n  transition: color 0.5s;\n  width: 100%;\n']),_templateObject9 = _taggedTemplateLiteral(['\n  height: 30px;\n  width: 30px;\n'], ['\n  height: 30px;\n  width: 30px;\n']),_templateObject10 = _taggedTemplateLiteral(['\n  align-items: center;\n  background: 0;\n  border: 4px solid #fff;\n  border-radius: 100%;\n  cursor: pointer;\n  display: inline-flex;\n  justify-content: center;\n  height: 44px;\n  left: 50%\n  margin: 30px 20px 0 20px;\n  top: 50%;\n  transition: background 0.5s;\n  width: 44px;\n\n  &:hover {\n    background: rgba(255, 255, 255, 0.25);\n  }\n'], ['\n  align-items: center;\n  background: 0;\n  border: 4px solid #fff;\n  border-radius: 100%;\n  cursor: pointer;\n  display: inline-flex;\n  justify-content: center;\n  height: 44px;\n  left: 50%\n  margin: 30px 20px 0 20px;\n  top: 50%;\n  transition: background 0.5s;\n  width: 44px;\n\n  &:hover {\n    background: rgba(255, 255, 255, 0.25);\n  }\n']),_templateObject11 = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: center;\n'], ['\n  display: flex;\n  justify-content: center;\n']);function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}function _taggedTemplateLiteral(strings, raw) {return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));}var _React = React,Component = _React.Component,Fragment = _React.Fragment;var _ReactDOM =
ReactDOM,render = _ReactDOM.render;
var root = document.querySelector('#app');
var MAGIC_NUMBER = 3;
var CardTrack = styled.div(_templateObject);





var getPosRules = function getPosRules() {

  var result = '';
  for (var i = 0; i < MAGIC_NUMBER + 1; i++) {
    if (i === 0) {
      result += '\n        &[data-pos="0"] {\n          filter: grayscale(0) drop-shadow(10px 10px 10px black);\n          transform: scale(1) translate(0, 0); z-index:' + (


      MAGIC_NUMBER + 1) + ';\n        }';

    } else if (i === 1) {
      result += '\n        &[data-pos="1"],\n        &[data-pos="-1"] {\n          z-index: 3;\n        }\n        &[data-pos="1"] {\n          transform: scale(0.8) translate(75%, 0);\n        }\n        &[data-pos="-1"] {\n          transform: scale(0.8) translate(-75%, 0);\n        }\n      ';











    } else if (i === 2) {
      result += '\n        &[data-pos="2"],\n        &[data-pos="-2"] {\n          z-index: 2;\n        }\n        &[data-pos="2"] {\n          transform: scale(0.6) translate(175%, 0);\n        }\n        &[data-pos="-2"] {\n          transform: scale(0.6) translate(-175%, 0);\n        }\n      ';











    } else if (i === 3) {
      result += '\n        &[data-pos="3"],\n        &[data-pos="-3"] {\n          z-index: 1;\n        }\n        &[data-pos="3"] {\n          transform: scale(0.5) translate(275%, 0);\n        }\n        &[data-pos="-3"] {\n          transform: scale(0.5) translate(-275%, 0);\n        }\n      ';











    }
  }
  return result;
};
var Container = styled.div(_templateObject2,










getPosRules());









var AuthorAvatar = styled.img(_templateObject3);









var Hero = styled.img(_templateObject4);





var ContentMark = styled.div(_templateObject5,
function (p) {return p.pos === 0 ? '#fafafa' : '#999';});








var Content = styled.div(_templateObject6);







var Title = styled.h1(_templateObject7);












var AuthorName = styled.h2(_templateObject8,

function (p) {return (
    p.pos === 0 ?
    ['#f89406', '#22a7f0', '#db0a5b', '#2eec71'][
    Math.floor(Math.random() * 4)] :

    '#777');});













var SVG = styled.svg(_templateObject9);



var Button = styled.button(_templateObject10);



















var Actions = styled.div(_templateObject11);var



Card = function (_Component) {_inherits(Card, _Component);function Card() {var _ref;var _temp, _this, _ret;_classCallCheck(this, Card);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Card.__proto__ || Object.getPrototypeOf(Card)).call.apply(_ref, [this].concat(args))), _this), _this.



    render = function () {var _this$props$data =
      _this.props.data,hero = _this$props$data.hero,title = _this$props$data.title,author = _this$props$data.author;
      return (
        React.createElement(Container, _extends({}, _this.props, { 'data-pos': _this.props.pos, 'data-gone': _this.props.pos < 0, 'data-coming': _this.props.pos > 0 }),
          React.createElement(Hero, { src: hero }),
          React.createElement(ContentMark, _extends({ className: 'content-mark' }, _this.props),
            React.createElement(Content, null,
              React.createElement(Title, null, title.charAt(0).toUpperCase() + title.slice(1)),
              React.createElement(AuthorName, _this.props, author.firstName + ' ' +
                author.lastName))),



          React.createElement(AuthorAvatar, { src: author.avatar })));


    }, _temp), _possibleConstructorReturn(_this, _ret);}return Card;}(Component);

/**
                                                                                   * Main app entry point
                                                                                   */Card.propTypes = { pos: PropTypes.number };var
App = function (_Component2) {_inherits(App, _Component2);function App() {var _ref2;var _temp2, _this2, _ret2;_classCallCheck(this, App);for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {args[_key2] = arguments[_key2];}return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref2 = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref2, [this].concat(args))), _this2), _this2.
    state = {
      active: 0,
      cards: [] }, _this2.







    generateCards = function () {
      var cards = [];
      for (var i = 0; i < _this2.props.amount; i++) {
        cards.push({
          hero: 'https://picsum.photos/420/320?image=' + i,
          author: {
            avatar: faker.internet.avatar(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName() },

          title: faker.company.bs() });

      }
      _this2.setState({ cards: cards });
    }, _this2.
    componentDidMount = function () {
      _this2.generateCards();
    }, _this2.
    render = function () {var _this3 = _this2,
      onNext = _this3.onNext,onPrev = _this3.onPrev,props = _this3.props,state = _this3.state;var
      amount = props.amount;var
      active = state.active,cards = state.cards,next = state.next,prev = state.prev;
      return (
        React.createElement(Fragment, null,
          cards.length === 0 && React.createElement('h1', null, 'Grabbing cards...'),
          cards.length > 0 &&
          React.createElement(CardTrack, null,
            cards.map(function (data, idx) {
              var pos = idx - active;
              // Prep for continuous rolling
              if (active >= amount - MAGIC_NUMBER && idx <= MAGIC_NUMBER) {
                pos = idx + (amount - active);
              } else if (active <= MAGIC_NUMBER && idx >= amount - MAGIC_NUMBER) {
                pos = 0 - (amount - idx + active);
              }
              return React.createElement(Card, _extends({ pos: pos }, { data: data, key: 'card--' + idx }));
            })),


          React.createElement(Actions, null,
            React.createElement(Button, { onClick: function onClick() {return _this2.setState({ active: active - 1 >= 0 ? active - 1 : amount - 1 });} },
              React.createElement(SVG, { viewBox: '0 0 24 24' },
                React.createElement('path', { fill: '#fff', d: 'M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z' }))),


            React.createElement(Button, { onClick: function onClick() {return _this2.setState({ active: active + 1 > amount - 1 ? 0 : active + 1 });} },
              React.createElement(SVG, { viewBox: '0 0 24 24' },
                React.createElement('path', { fill: '#fff', d: 'M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' }))))));





    }, _temp2), _possibleConstructorReturn(_this2, _ret2);}return App;}(Component);App.propTypes = { amount: PropTypes.number };App.defaultProps = { amount: 20 };


ReactDOM.render(React.createElement(App, null), root);var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _templateObject = _taggedTemplateLiteral(['\n  height: 300px;\n  position: relative;\n  transform-style: preserve-3d;\n  width: 200px;\n'], ['\n  height: 300px;\n  position: relative;\n  transform-style: preserve-3d;\n  width: 200px;\n']),_templateObject2 = _taggedTemplateLiteral(['\n  border-radius: 6px;\n  height: 100%;\n  left: 0;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  filter: grayscale(1) drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.15));\n  transform: scale(0) translate(0, 0);\n  transition: transform 0.5s, filter 0.5s, z-index 0.5s;\n  width: 100%;\n  ', '\n  z-index: -1;\n\n  &[data-gone="true"] .content-mark {\n    clip-path: polygon(100% 70%, 0% 30%, 0% 100%, 100% 100%);\n  }\n  &[data-coming="true"] .content-mark {\n    clip-path: polygon(100% 30%, 0% 70%, 0% 100%, 100% 100%);\n  }\n'], ['\n  border-radius: 6px;\n  height: 100%;\n  left: 0;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  filter: grayscale(1) drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.15));\n  transform: scale(0) translate(0, 0);\n  transition: transform 0.5s, filter 0.5s, z-index 0.5s;\n  width: 100%;\n  ', '\n  z-index: -1;\n\n  &[data-gone="true"] .content-mark {\n    clip-path: polygon(100% 70%, 0% 30%, 0% 100%, 100% 100%);\n  }\n  &[data-coming="true"] .content-mark {\n    clip-path: polygon(100% 30%, 0% 70%, 0% 100%, 100% 100%);\n  }\n']),_templateObject3 = _taggedTemplateLiteral(['\n  background: #87d37c;\n  border-radius: 100%;\n  height: 60px;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 60px;\n'], ['\n  background: #87d37c;\n  border-radius: 100%;\n  height: 60px;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 60px;\n']),_templateObject4 = _taggedTemplateLiteral(['\n  background: #db0a5b;\n  height: 70%;\n  object-fit: cover;\n  width: 100%;\n'], ['\n  background: #db0a5b;\n  height: 70%;\n  object-fit: cover;\n  width: 100%;\n']),_templateObject5 = _taggedTemplateLiteral(['\n  background-color: ', ';\n  bottom: 0;\n  clip-path: polygon(100% 50%, 0% 50%, 0% 100%, 100% 100%);\n  height: 100%;\n  left: -1px;\n  position: absolute;\n  right: -1px;\n  transition: clip-path 0.5s, background 0.5s;\n'], ['\n  background-color: ', ';\n  bottom: 0;\n  clip-path: polygon(100% 50%, 0% 50%, 0% 100%, 100% 100%);\n  height: 100%;\n  left: -1px;\n  position: absolute;\n  right: -1px;\n  transition: clip-path 0.5s, background 0.5s;\n']),_templateObject6 = _taggedTemplateLiteral(['\n  bottom: 0;\n  height: 50%;\n  left: 0;\n  padding: 30px 10px 10px 10px;\n  position: absolute;\n  right: 0;\n'], ['\n  bottom: 0;\n  height: 50%;\n  left: 0;\n  padding: 30px 10px 10px 10px;\n  position: absolute;\n  right: 0;\n']),_templateObject7 = _taggedTemplateLiteral(['\n  align-items: center;\n  color: #111;\n  display: flex;\n  font-family: \'HelveticaNeue-Light\', \'Helvetica Neue Light\', \'Helvetica Neue\',\n    Helvetica, Arial, \'Lucida Grande\', sans-serif;\n  font-size: 1.25rem;\n  height: 5rem;\n  justify-content: center;\n  margin: 10px 0 0 0;\n  padding: 0;\n  text-align: center;\n'], ['\n  align-items: center;\n  color: #111;\n  display: flex;\n  font-family: \'HelveticaNeue-Light\', \'Helvetica Neue Light\', \'Helvetica Neue\',\n    Helvetica, Arial, \'Lucida Grande\', sans-serif;\n  font-size: 1.25rem;\n  height: 5rem;\n  justify-content: center;\n  margin: 10px 0 0 0;\n  padding: 0;\n  text-align: center;\n']),_templateObject8 = _taggedTemplateLiteral(['\n  bottom: 10px;\n  color: ', ';\n  font-family: \'HelveticaNeue-Light\', \'Helvetica Neue Light\', \'Helvetica Neue\',\n    Helvetica, Arial, \'Lucida Grande\', sans-serif;\n  font-size: 0.75rem;\n  font-weight: 300;\n  left: 0;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  text-align: center;\n  text-transform: uppercase;\n  transition: color 0.5s;\n  width: 100%;\n'], ['\n  bottom: 10px;\n  color: ', ';\n  font-family: \'HelveticaNeue-Light\', \'Helvetica Neue Light\', \'Helvetica Neue\',\n    Helvetica, Arial, \'Lucida Grande\', sans-serif;\n  font-size: 0.75rem;\n  font-weight: 300;\n  left: 0;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  text-align: center;\n  text-transform: uppercase;\n  transition: color 0.5s;\n  width: 100%;\n']),_templateObject9 = _taggedTemplateLiteral(['\n  height: 30px;\n  width: 30px;\n'], ['\n  height: 30px;\n  width: 30px;\n']),_templateObject10 = _taggedTemplateLiteral(['\n  align-items: center;\n  background: 0;\n  border: 4px solid #fff;\n  border-radius: 100%;\n  cursor: pointer;\n  display: inline-flex;\n  justify-content: center;\n  height: 44px;\n  left: 50%\n  margin: 30px 20px 0 20px;\n  top: 50%;\n  transition: background 0.5s;\n  width: 44px;\n\n  &:hover {\n    background: rgba(255, 255, 255, 0.25);\n  }\n'], ['\n  align-items: center;\n  background: 0;\n  border: 4px solid #fff;\n  border-radius: 100%;\n  cursor: pointer;\n  display: inline-flex;\n  justify-content: center;\n  height: 44px;\n  left: 50%\n  margin: 30px 20px 0 20px;\n  top: 50%;\n  transition: background 0.5s;\n  width: 44px;\n\n  &:hover {\n    background: rgba(255, 255, 255, 0.25);\n  }\n']),_templateObject11 = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: center;\n'], ['\n  display: flex;\n  justify-content: center;\n']);function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}function _taggedTemplateLiteral(strings, raw) {return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));}var _React = React,Component = _React.Component,Fragment = _React.Fragment;var _ReactDOM =
ReactDOM,render = _ReactDOM.render;
var root = document.querySelector('#app');
var MAGIC_NUMBER = 3;
var CardTrack = styled.div(_templateObject);





var getPosRules = function getPosRules() {

  var result = '';
  for (var i = 0; i < MAGIC_NUMBER + 1; i++) {
    if (i === 0) {
      result += '\n        &[data-pos="0"] {\n          filter: grayscale(0) drop-shadow(10px 10px 10px black);\n          transform: scale(1) translate(0, 0); z-index:' + (


      MAGIC_NUMBER + 1) + ';\n        }';

    } else if (i === 1) {
      result += '\n        &[data-pos="1"],\n        &[data-pos="-1"] {\n          z-index: 3;\n        }\n        &[data-pos="1"] {\n          transform: scale(0.8) translate(75%, 0);\n        }\n        &[data-pos="-1"] {\n          transform: scale(0.8) translate(-75%, 0);\n        }\n      ';











    } else if (i === 2) {
      result += '\n        &[data-pos="2"],\n        &[data-pos="-2"] {\n          z-index: 2;\n        }\n        &[data-pos="2"] {\n          transform: scale(0.6) translate(175%, 0);\n        }\n        &[data-pos="-2"] {\n          transform: scale(0.6) translate(-175%, 0);\n        }\n      ';











    } else if (i === 3) {
      result += '\n        &[data-pos="3"],\n        &[data-pos="-3"] {\n          z-index: 1;\n        }\n        &[data-pos="3"] {\n          transform: scale(0.5) translate(275%, 0);\n        }\n        &[data-pos="-3"] {\n          transform: scale(0.5) translate(-275%, 0);\n        }\n      ';











    }
  }
  return result;
};
var Container = styled.div(_templateObject2,










getPosRules());









var AuthorAvatar = styled.img(_templateObject3);









var Hero = styled.img(_templateObject4);





var ContentMark = styled.div(_templateObject5,
function (p) {return p.pos === 0 ? '#fafafa' : '#999';});








var Content = styled.div(_templateObject6);







var Title = styled.h1(_templateObject7);












var AuthorName = styled.h2(_templateObject8,

function (p) {return (
    p.pos === 0 ?
    ['#f89406', '#22a7f0', '#db0a5b', '#2eec71'][
    Math.floor(Math.random() * 4)] :

    '#777');});













var SVG = styled.svg(_templateObject9);



var Button = styled.button(_templateObject10);



















var Actions = styled.div(_templateObject11);var



Card = function (_Component) {_inherits(Card, _Component);function Card() {var _ref;var _temp, _this, _ret;_classCallCheck(this, Card);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Card.__proto__ || Object.getPrototypeOf(Card)).call.apply(_ref, [this].concat(args))), _this), _this.



    render = function () {var _this$props$data =
      _this.props.data,hero = _this$props$data.hero,title = _this$props$data.title,author = _this$props$data.author;
      return (
        React.createElement(Container, _extends({}, _this.props, { 'data-pos': _this.props.pos, 'data-gone': _this.props.pos < 0, 'data-coming': _this.props.pos > 0 }),
          React.createElement(Hero, { src: hero }),
          React.createElement(ContentMark, _extends({ className: 'content-mark' }, _this.props),
            React.createElement(Content, null,
              React.createElement(Title, null, title.charAt(0).toUpperCase() + title.slice(1)),
              React.createElement(AuthorName, _this.props, author.firstName + ' ' +
                author.lastName))),



          React.createElement(AuthorAvatar, { src: author.avatar })));


    }, _temp), _possibleConstructorReturn(_this, _ret);}return Card;}(Component);

/**
                                                                                   * Main app entry point
                                                                                   */Card.propTypes = { pos: PropTypes.number };var
App = function (_Component2) {_inherits(App, _Component2);function App() {var _ref2;var _temp2, _this2, _ret2;_classCallCheck(this, App);for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {args[_key2] = arguments[_key2];}return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref2 = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref2, [this].concat(args))), _this2), _this2.
    state = {
      active: 0,
      cards: [] }, _this2.







    generateCards = function () {
      var cards = [];
      for (var i = 0; i < _this2.props.amount; i++) {
        cards.push({
          hero: 'https://picsum.photos/420/320?image=' + i,
          author: {
            avatar: faker.internet.avatar(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName() },

          title: faker.company.bs() });

      }
      _this2.setState({ cards: cards });
    }, _this2.
    componentDidMount = function () {
      _this2.generateCards();
    }, _this2.
    render = function () {var _this3 = _this2,
      onNext = _this3.onNext,onPrev = _this3.onPrev,props = _this3.props,state = _this3.state;var
      amount = props.amount;var
      active = state.active,cards = state.cards,next = state.next,prev = state.prev;
      return (
        React.createElement(Fragment, null,
          cards.length === 0 && React.createElement('h1', null, 'Grabbing cards...'),
          cards.length > 0 &&
          React.createElement(CardTrack, null,
            cards.map(function (data, idx) {
              var pos = idx - active;
              // Prep for continuous rolling
              if (active >= amount - MAGIC_NUMBER && idx <= MAGIC_NUMBER) {
                pos = idx + (amount - active);
              } else if (active <= MAGIC_NUMBER && idx >= amount - MAGIC_NUMBER) {
                pos = 0 - (amount - idx + active);
              }
              return React.createElement(Card, _extends({ pos: pos }, { data: data, key: 'card--' + idx }));
            })),


          React.createElement(Actions, null,
            React.createElement(Button, { onClick: function onClick() {return _this2.setState({ active: active - 1 >= 0 ? active - 1 : amount - 1 });} },
              React.createElement(SVG, { viewBox: '0 0 24 24' },
                React.createElement('path', { fill: '#fff', d: 'M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z' }))),


            React.createElement(Button, { onClick: function onClick() {return _this2.setState({ active: active + 1 > amount - 1 ? 0 : active + 1 });} },
              React.createElement(SVG, { viewBox: '0 0 24 24' },
                React.createElement('path', { fill: '#fff', d: 'M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' }))))));





    }, _temp2), _possibleConstructorReturn(_this2, _ret2);}return App;}(Component);App.propTypes = { amount: PropTypes.number };App.defaultProps = { amount: 20 };


ReactDOM.render(React.createElement(App, null), root);













