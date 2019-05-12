// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

function towerBuilder(nFloors) {
    let tower = ['*'];

    if (nFloors === 1) {
        return tower;
    } else {
        for (let i = 1; i < nFloors; i++) {
            tower.push(tower[i-1]+'**');
        }
        return tower; 
    }
  }

  // NOT RIGHT 