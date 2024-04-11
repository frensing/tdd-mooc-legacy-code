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

      if (item.name == 'Aged Brie') {
        item.sellIn -= 1
        if (item.quality < 50) {
          item.quality += 1

          if (item.sellIn < 0 && item.quality < 50) {
            item.quality += 1
          }
        }
      }

      if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
        item.sellIn -= 1

        if (item.quality < 50) {
          item.quality += 1

          if (item.sellIn < 10) {
            if (item.quality < 50) {
              item.quality += 1;
            }

            if (item.sellIn < 5 && item.quality < 50) {
              item.quality = item.quality + 1;
            } 
          }
        }

        if (item.sellIn < 0) {
          item.quality -= item.quality
        }
      }

      if (item.name == 'Sulfuras, Hand of Ragnaros') {} // nothing

      if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert' && item.name != 'Sulfuras, Hand of Ragnaros') {

        if (item.quality > 0) {
          item.quality = item.quality - 1;
        }

        item.sellIn = item.sellIn - 1;

        if (item.sellIn < 0 && item.quality > 0) {
          item.quality = item.quality - 1;
        }

      }

    }

    return this.items;
  }
}
