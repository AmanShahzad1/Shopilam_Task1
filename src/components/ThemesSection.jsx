import React from 'react';

const themes = [
  {
    name: 'Navy Blue',
    lightClasses: ['bluenavy-light-1', 'bluenavy-light-2', 'bluenavy-light-3'],
    darkClasses: ['bluenavy-dark-1', 'bluenavy-dark-2', 'bluenavy-dark-3']
  },
  {
    name: 'Olympic Blue',
    lightClasses: ['blueolympic-light-1', 'blueolympic-light-2', 'blueolympic-light-3'],
    darkClasses: ['blueolympic-dark-1', 'blueolympic-dark-2', 'blueolympic-dark-3']
  },
  {
    name: 'Yale Blue',
    lightClasses: ['blueyale-light-1', 'blueyale-light-2', 'blueyale-light-3'],
    darkClasses: ['blueyale-dark-1', 'blueyale-dark-2', 'blueyale-dark-3']
  },
  {
    name: 'Moss Green',
    lightClasses: ['greenmoss-light-1', 'greenmoss-light-2', 'greenmoss-light-3'],
    darkClasses: ['greenmoss-dark-1', 'greenmoss-dark-2', 'greenmoss-dark-3']
  },
  {
    name: 'Lime Green',
    lightClasses: ['greenlime-light-1', 'greenlime-light-2', 'greenlime-light-3'],
    darkClasses: ['greenlime-dark-1', 'greenlime-dark-2', 'greenlime-dark-3']
  },
  {
    name: 'Carrot Orange',
    lightClasses: ['carrotorange-light-1', 'carrotorange-light-2', 'carrotorange-light-3'],
    darkClasses: ['carrotorange-dark-1', 'carrotorange-dark-2', 'carrotorange-dark-3']
  },
  {
    name: 'Ruby Red',
    lightClasses: ['rubyred-light-1', 'rubyred-light-2', 'rubyred-light-3'],
    darkClasses: ['rubyred-dark-1', 'rubyred-dark-2', 'rubyred-dark-3']
  },
  {
    name: 'Monster Purple',
    lightClasses: ['monsterpurple-light-1', 'monsterpurple-light-2', 'monsterpurple-light-3'],
    darkClasses: ['monsterpurple-dark-1', 'monsterpurple-dark-2', 'monsterpurple-dark-3']
  },
  {
    name: 'Steel Grey',
    lightClasses: ['steelgrey-light-1', 'steelgrey-light-2', 'steelgrey-light-3'],
    darkClasses: ['steelgrey-dark-1', 'steelgrey-dark-2', 'steelgrey-dark-3']
  },
  {
    name: 'Granola Yellow',
    lightClasses: ['granolayellow-light-1', 'granolayellow-light-2', 'granolayellow-light-3'],
    darkClasses: ['granolayellow-dark-1', 'granolayellow-dark-2', 'granolayellow-dark-3']
  }
];

const ThemesSection = () => {
  return (
    <div className="section mb-0">
      <div className="container" id="themes">
        <div className="row mb-5">
          <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
            <h1>Themes</h1>
            <p>
              We carefully chose colors and created 10 different themes with dark and light versions. You may also create your own themes easily since all the theme related styling is managed by Sass variables.
            </p>
          </div>
        </div>
        <div className="row pt-3">
          {themes.map((theme, index) => (
            <React.Fragment key={index}>
              <div className="col-12 text-center mb-3">
                <h4 className="text-center">{theme.name}</h4>
              </div>
              <div className="col-12 col-md-6 col-lg-4 offset-lg-2 mb-3">
                <div className="depth-2 color-container">
                  {theme.lightClasses.map((className, idx) => (
                    <div key={idx} className={`color-left ${className}`}></div>
                  ))}
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-3">
                <div className="depth-2 color-container">
                  {theme.darkClasses.map((className, idx) => (
                    <div key={idx} className={`color-left ${className}`}></div>
                  ))}
                </div>
              </div>
              <div className="col-12 mb-5"></div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemesSection;
