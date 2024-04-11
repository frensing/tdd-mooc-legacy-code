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
      item.quality += 1

      if (item.name == 'Aged Brie') {
        

        if (item.sellIn < 0) {
          item.quality += 1
        }
      }

      if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {

        if (item.sellIn < 10) {
          item.quality += 1;

          if (item.sellIn < 5) {
            item.quality = item.quality + 1;
          } 
        }

        if (item.sellIn < 0) {
          item.quality -= item.quality
        }
      }

      if (item.name == 'Sulfuras, Hand of Ragnaros') {
        item.sellIn += 1
        item.quality -= 1
      }

      if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert' && item.name != 'Sulfuras, Hand of Ragnaros') {
        item.quality = item.quality - 2;

        if (item.sellIn < 0 && item.quality > 0) {
          item.quality = item.quality - 1;
        }

      }

      item.sellIn = Math.max(item.sellIn, 0)
      item.quality = Math.max(Math.min(item.quality, 50), 0)
    }

    return this.items;
  }
}
