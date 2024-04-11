export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      const item = this.items[i]

      item.sellIn -= 1

      switch(item.name) {
        case 'Aged Brie':
          this.updateBrie(item)
          break
        case 'Backstage passes to a TAFKAL80ETC concert':
          this.updateBackstage(item)
          break
        case 'Sulfuras, Hand of Ragnaros':
          item.sellIn += 1
          break
        default:
          if (item.sellIn >= 0) {
            item.quality -= 1
          } else {
            item.quality -= 2
          }
      }

      item.quality = Math.max(Math.min(item.quality, 50), 0)
    }

    return this.items;
  }

  updateBrie(item) {
    if (item.sellIn >= 0) {
      item.quality += 1
    } else {
      item.quality += 2
    }
  }

  updateBackstage(item) {
    if (item.sellIn >= 10) {
      item.quality += 1
    } else if (item.sellIn >= 5 && item.sellIn < 10) {
      item.quality += 2;
    } else if (item.sellIn >= 0 && item.sellIn < 5) {
      item.quality = item.quality + 3;
    } else {
      item.quality = 0
    }
  }
}
