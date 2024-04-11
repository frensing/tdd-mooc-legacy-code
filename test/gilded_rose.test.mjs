import { describe, test } from "vitest";
import { expect } from "chai";
import { Item, Shop } from "../src/gilded_rose.mjs";

describe("Gilded Rose", () => {
  test("foo", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
  });

  test('no input list', () => {
    let gildedRose = new Shop()
    let items = gildedRose.updateQuality()
    expect(items.length).to.equal(0)
  })

  describe('default item', () => {
    const name = 'default'
    const sellIn = 1
      const quality = 10

    test('quality and sellIn decreases', () => {
      const gildedRose = new Shop([new Item(name, sellIn, quality)])
      const items = gildedRose.updateQuality()

      expect(items[0].name).to.equal(name)
      expect(items[0].sellIn).to.equal(sellIn - 1)
      expect(items[0].quality).to.equal(quality - 1)
    })

    test('quality max is 50', () => {
      const quality = 55
      const gildedRose = new Shop([new Item(name, sellIn, quality)])
      const items = gildedRose.updateQuality()
      expect(items[0].quality).to.equal(50)
    })

    test('quality never negative', () => {
      const quality = 0
      const gildedRose = new Shop([new Item(name, sellIn, quality)])
      const items = gildedRose.updateQuality()
      expect(items[0].quality).to.equal(0)
    })

    test('when sellIn is smaller 0, twice quality loss', () => {
      const sellIn = 0
      const gildedRose = new Shop([new Item(name, sellIn, quality)])
      const items = gildedRose.updateQuality()
      expect(items[0].quality).to.equal(quality - 2)
    })
  })

  describe('Aged Brie', () => {
    const name = 'Aged Brie'
    const sellIn = 1
    const quality = 10

    test('quality increases', () => {
      const gildedRose = new Shop([new Item(name, sellIn, quality)])
      const items = gildedRose.updateQuality()

      expect(items[0].sellIn).to.equal(sellIn - 1)
      expect(items[0].quality).to.equal(quality + 1)
    })

    test('quality increases double when sellIn smaller 0', () => {
      const sellIn = 0
      const gildedRose = new Shop([new Item(name, sellIn, quality)])
      const items = gildedRose.updateQuality()

      expect(items[0].sellIn).to.equal(sellIn - 1)
      expect(items[0].quality).to.equal(quality + 2)
    })
  })

  describe('Backstage passes to a TAFKAL80ETC concert', () => {
    const name = 'Backstage passes to a TAFKAL80ETC concert'
    const sellIn = 11
    const quality = 10

    test('quality increases', () => {
      const gildedRose = new Shop([new Item(name, sellIn, quality)])
      const items = gildedRose.updateQuality()

      expect(items[0].sellIn).to.equal(sellIn - 1)
      expect(items[0].quality).to.equal(quality + 1)
    })

    test('quality increases double when sellIn smaller 10 but greater equal 5', () => {
      let sellIn = 10
      let gildedRose = new Shop([new Item(name, sellIn, quality)])
      let items = gildedRose.updateQuality()

      expect(items[0].sellIn).to.equal(sellIn - 1)
      expect(items[0].quality).to.equal(quality + 2)

      sellIn = 6
      gildedRose = new Shop([new Item(name, sellIn, quality)])
      items = gildedRose.updateQuality()

      expect(items[0].sellIn).to.equal(sellIn - 1)
      expect(items[0].quality).to.equal(quality + 2)
    })

    test('quality increases trice when sellIn smaller 5 but not negative', () => {
      let sellIn = 5
      let gildedRose = new Shop([new Item(name, sellIn, quality)])
      let items = gildedRose.updateQuality()

      expect(items[0].sellIn).to.equal(sellIn - 1)
      expect(items[0].quality).to.equal(quality + 3)

      sellIn = 1
      gildedRose = new Shop([new Item(name, sellIn, quality)])
      items = gildedRose.updateQuality()

      expect(items[0].sellIn).to.equal(sellIn - 1)
      expect(items[0].quality).to.equal(quality + 3)
    })

    test('quality 0 when negative sellIn', () => {
      const sellIn = 0
      const gildedRose = new Shop([new Item(name, sellIn, quality)])
      const items = gildedRose.updateQuality()

      expect(items[0].sellIn).to.equal(sellIn - 1)
      expect(items[0].quality).to.equal(0)
    })
  })

  describe('Sulfuras, Hand of Ragnaros', () => {
    const name = 'Sulfuras, Hand of Ragnaros'
    const quality = 42

    test('quality is 80', () => {
      const gildedRose = new Shop([new Item(name, 0, quality)])
      const items = gildedRose.updateQuality()

      expect(items[0].name).to.equal(name)
      expect(items[0].quality).to.equal(80)
    })

    test('sellIn does not decrease', () => {
      const sellIn = 10
      const gildedRose = new Shop([new Item(name, sellIn, quality)])
      const items = gildedRose.updateQuality()

      expect(items[0].sellIn).to.equal(sellIn)
    })
  })

  describe('Conjured', () => {
    const name = 'Conjured'
    const quality = 10
    const sellIn = 1

    test('quality degrades twice as fast', () => {
      const gildedRose = new Shop([new Item(name, sellIn, quality)])
      const items = gildedRose.updateQuality()

      expect(items[0].name).to.equal(name)
      expect(items[0].quality).to.equal(quality - 2)
    })

    test('quality degrades four-times as fast with negative sellin', () => {
      const sellIn = 0
      const gildedRose = new Shop([new Item(name, sellIn, quality)])
      const items = gildedRose.updateQuality()

      expect(items[0].name).to.equal(name)
      expect(items[0].quality).to.equal(quality - 4)
    })
  })
});
