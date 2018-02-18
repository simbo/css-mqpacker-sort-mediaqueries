const fixtureMixed = [
  'screen and (min-width: 575px) and (max-width: 767px)',
  'screen and (min-width: 1200px)',
  'screen and (min-width: 992px) and (max-width: 1199px)',
  '(min-width: 768px) and (max-width: 991px)',
  '(max-width: 991px)',
  'screen and (min-width: 768px)',
  'screen and (max-width: 574px)',
  'screen and (min-width: 768px)',
  'screen and (min-width: 992px)',
  '(min-width: 575px)',
  'screen and (min-width: 575px) and (max-width: 991px)',
  'screen and (max-width: 767px)'
];

const fixtureSorted = [
  'screen and (max-width: 574px)',
  '(min-width: 575px)',
  'screen and (min-width: 575px) and (max-width: 767px)',
  'screen and (min-width: 575px) and (max-width: 991px)',
  'screen and (max-width: 767px)',
  'screen and (min-width: 768px)',
  'screen and (min-width: 768px)',
  '(min-width: 768px) and (max-width: 991px)',
  '(max-width: 991px)',
  'screen and (min-width: 992px)',
  'screen and (min-width: 992px) and (max-width: 1199px)',
  'screen and (min-width: 1200px)'
];

module.exports = {
  fixtureMixed,
  fixtureSorted
};
