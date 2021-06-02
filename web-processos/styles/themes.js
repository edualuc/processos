export const themeDefault = {
  maxWidth: 1024,
  colors: {
    primary: '#003079',
    secondary: '#999',
    light: '#73A3F3',
    dark: '#3373A3',
    background: '#F0F9FF',
    backgroundDark: '#C4C4C4',
    backgroundLight: '#FFF',
    header: {
      color1: '#AAA',
      color2: '#888',
      color3: '#888',
      color4: '#AAA',
      color5: '#DDD',
    },
    table: {
      border: '#ccc',
    }
  },
  margin: {
    default: 20,
    thin: 10,
    big: 30,
  },
  padding: {
    default: 8,
    thin: 4,
    big: 20,
  },
  border: {
    radius: 20,
  },
  font: {
    title: 1.4,
    title2: 1.2,
    body: 1,
  },
}

const themeNormal = {
  ...themeDefault, 
  border: {
    radius: 0,
  },
  font: {
    title: 1.2,
    title2: 1.1,
    body: 1,
  }
}

const themeFlying = {
  ...themeDefault, 
  colors: {
    primary: 'hsl(58, 88%, 47%)',
    secondary: 'hsl(142, 73%, 57%)',
    light: '#FFF',
    dark: '#333',
    background: '#F3F3F3',
    backgroundDark: '#AFAFAF',
    backgroundLight: '#FFF',
    header: {
      color1: 'hsl(58, 88%, 47%)',
      color2: 'hsl(58, 88%, 27%)',
      color3: 'hsl(58, 88%, 27%)',
      color4: 'hsl(58, 88%, 37%)',
      color5: 'hsl(58, 88%, 47%)',
    }
  },
  margin: {
    default: 20,
    thin: 20,
    big: 20,
  },
}

const themeFire = {
  ...themeDefault, 
  colors: {
    primary: '#A30C0C',
    secondary: '#BD2D00',
    light: '#FFF',
    dark: '#333',
    background: '#F3F3F3',
    backgroundDark: '#C4C4C4',
    backgroundLight: '#FFF',
    header: {
      color1: '#D10202',
      color2: '#A30C0C',
      color3: '#A30C0C',
      color4: '#BD2D00',
      color5: '#F33A00',
    }
  },
  margin: {
    default: 20,
    thin: 10,
    big: 30,
  },
}

const themeWater = {
  ...themeDefault, 
  colors: {
    primary: '#3330e9',
    secondary: '#8d8cf3',
    light: '#FFF',
    dark: '#333',
    background: '#F3F3F3',
    backgroundDark: '#AFAFAF',
    backgroundLight: '#FFF',
    header: {
      color1: '#3330e9',
      color2: '#3330e9',
      color3: '#1916d0',
      color4: '#1916d0',
      color5: '#8d8cf3',
    }
  },
  margin: {
    default: 25,
    thin: 15,
    big: 30,
  },
  border: {
    radius: 30,
  },
}

const themeBug = {
  ...themeDefault, 
  colors: {
    primary: 'hsl(142, 73%, 37%)',
    secondary: 'hsl(142, 73%, 57%)',
    light: '#FFF',
    dark: '#333',
    background: '#F3F3F3',
    backgroundDark: '#AFAFAF',
    backgroundLight: '#FFF',
    header: {
      color1: 'hsl(142, 73%, 57%)',
      color2: 'hsl(142, 73%, 47%)',
      color3: 'hsl(142, 73%, 37%)',
      color4: 'hsl(142, 73%, 37%)',
      color5: 'hsl(142, 43%, 62%)',
    }
  },
  margin: {
    default: 12,
    thin: 8,
    big: 20,
  },
}

const themeFairy = {
  ...themeDefault, 
  colors: {
    primary: 'hsl(312, 94%, 40%)',
    secondary: 'hsl(312, 94%, 60%)',
    light: '#FFF',
    dark: '#333',
    background: '#F3F3F3',
    backgroundDark: '#AFAFAF',
    backgroundLight: '#FFF',
    header: {
      color1: 'hsl(312, 94%, 40%)',
      color2: 'hsl(312, 94%, 25%)',
      color3: 'hsl(312, 94%, 25%)',
      color4: 'hsl(312, 94%, 35%)',
      color5: 'hsl(312, 94%, 70%)',
    }
  },
  margin: {
    default: 12,
    thin: 8,
    big: 20,
  },
}

const themes = {
  themeDefault: themeDefault,
  normal: themeNormal,
  flying: themeFlying,
  fire: themeFire,
  water: themeWater,
  bug: themeBug,
  fairy: themeFairy,
}

export default themes