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

      switch(item.name) {
        case 'Aged Brie':
          this.updateBrie(item)
          break
        case 'Backstage passes to a TAFKAL80ETC concert':
          this.updateBackstage(item)
          break
        case 'Sulfuras, Hand of Ragnaros':
          break
        default:
          item.sellIn -= 1
          item.quality -= 1

          if (item.sellIn < 0) {
            item.quality = item.quality - 1;
          }
      }
      
      item.quality = Math.max(Math.min(item.quality, 50), 0)
    }

    return this.items;
  }

  updateBrie(item) {
    item.quality += 1

    if (item.sellIn < 0) {
      item.quality += 1
    }
  }

  updateBackstage(item) {
    item.quality += 1

    if (item.sellIn < 11) {
      item.quality += 1;

      if (item.sellIn < 6) {
        item.quality = item.quality + 1;
      }
    }

    if (item.sellIn < 0) {
      item.quality -= item.quality;
    }
  }
}
