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

      if (item.name == 'Sulfuras, Hand of Ragnaros') {

      }




      if (item.name != 'Aged Brie' && item.name && item.name != 'Backstage passes to a TAFKAL80ETC concert') {

        if (this.items[i].quality > 0) {
          if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }

        if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
          this.items[i].sellIn = this.items[i].sellIn - 1;
        }

        if (this.items[i].sellIn < 0) {
          if (this.items[i].quality > 0) {
            if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
              this.items[i].quality = this.items[i].quality - 1;
            }
          }
        }

      }

    }

    return this.items;
  }
}
