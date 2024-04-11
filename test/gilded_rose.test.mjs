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

  describe('name != Aged Brie and != Backstage ...', () => {
    const name = 'foo'

    describe('quality > 0', () => {
      const quality = 1

      test('name != Sulfuras...', () => {
        const gildedRose = new Shop([new Item(name, 0, quality)])
        const items = gildedRose.updateQuality()

        expect(items[0].name).to.equal(name)
        expect(items[0].quality).to.equal(quality - 1)
      })

      test('name = Sufuras...', () => {
        const name = 'Sulfuras, Hand of Ragnaros'
        const gildedRose = new Shop([new Item(name, 0, quality)])
        const items = gildedRose.updateQuality()

        expect(items[0].name).to.equal(name)
        expect(items[0].quality).to.equal(quality)
      })
    })

    test('quality <= 0', () => {
      const quality = 0
      const gildedRose = new Shop([new Item(name, 0, quality)])
      const items = gildedRose.updateQuality()

      expect(items[0].name).to.equal(name)
      expect(items[0].quality).to.equal(quality)
    })
  })

  describe('name = Aged Brie or = Backstage ...', () => {
    const name = 'Aged Brie'

    describe('quality < 50', () => {
      const quality = 1

      describe('name = Backstage ...', () => {
        const name = 'Backstage passes to a TAFKAL80ETC concert'

        test('sellIn >= 11', () => {
          const sellIn = 11

          const gildedRose = new Shop([new Item(name, sellIn, quality)])
          const items = gildedRose.updateQuality()

          expect(items[0].name).to.equal(name)
          expect(items[0].quality).to.equal(quality + 1)
        })

        describe('6 < sellIn < 11', () => {
          const sellIn = 7
          
          test('quality < 49 < 50', () => {
            const gildedRose = new Shop([new Item(name, sellIn, quality)])
            const items = gildedRose.updateQuality()

            expect(items[0].name).to.equal(name)
            expect(items[0].quality).to.equal(quality + 2)
          })

          test('quality = 49', () => {
            const quality = 49
            const gildedRose = new Shop([new Item(name, sellIn, quality)])
            const items = gildedRose.updateQuality()

            expect(items[0].name).to.equal(name)
            expect(items[0].quality).to.equal(quality + 1)
          })
        })

        describe('sellIn < 6', () => {
          const sellIn = 5

          test('quality < 48 < 50', () => {
            const gildedRose = new Shop([new Item(name, sellIn, quality)])
            const items = gildedRose.updateQuality()

            expect(items[0].name).to.equal(name)
            expect(items[0].quality).to.equal(quality + 3)
          })

          test('quality = 48', () => {
            const quality = 48
            const gildedRose = new Shop([new Item(name, sellIn, quality)])
            const items = gildedRose.updateQuality()

            expect(items[0].name).to.equal(name)
            expect(items[0].quality).to.equal(quality + 2)
          })

          test('quality = 49', () => {
            const quality = 49
            const gildedRose = new Shop([new Item(name, sellIn, quality)])
            const items = gildedRose.updateQuality()

            expect(items[0].name).to.equal(name)
            expect(items[0].quality).to.equal(quality + 1)
          })
        })
      })

      test('name = Aged Brie', () => {
        const gildedRose = new Shop([new Item(name, 1, quality)])
        const items = gildedRose.updateQuality()

        expect(items[0].name).to.equal(name)
        expect(items[0].quality).to.equal(quality + 1)
      })
    })

    test('quality >= 50', () => {
      const quality = 50

      const gildedRose = new Shop([new Item(name, 1, quality)])
      const items = gildedRose.updateQuality()

      expect(items[0].name).to.equal(name)
      expect(items[0].quality).to.equal(quality)
    })
  })

  test('name != Sulfuras ...', () => {
    const name = 'foo'
    const sellIn = 1

    const gildedRose = new Shop([new Item(name, sellIn, 0)])
    const items = gildedRose.updateQuality()

    expect(items[0].name).to.equal(name)
    expect(items[0].sellIn).to.equal(sellIn - 1)
  })

  test('name = Sulfuras ...', () => {
    const name = 'Sulfuras, Hand of Ragnaros'
    const sellIn = 1

    const gildedRose = new Shop([new Item(name, sellIn, 0)])
    const items = gildedRose.updateQuality()

    expect(items[0].name).to.equal(name)
    expect(items[0].sellIn).to.equal(sellIn)
  })

  describe('sellIn < 0', () => {
    const sellIn = -1

    describe('name != Aged Brie', () => {
      const name = 'foo'

      describe('name != Backstage ...', () => {
        
        describe('quality > 0', () => {
          const quality = 1

          test('name != Sulfuras ...', () => {
            const gildedRose = new Shop([new Item(name, sellIn, quality)])
            const items = gildedRose.updateQuality()

            expect(items[0].name).to.equal(name)
            expect(items[0].quality).to.equal(quality - 1)
          })

          test('name = Sulfuras', () => {
            const name = 'Sulfuras, Hand of Ragnaros'

            const gildedRose = new Shop([new Item(name, sellIn, quality)])
            const items = gildedRose.updateQuality()

            expect(items[0].name).to.equal(name)
            expect(items[0].quality).to.equal(quality)
          })
        })
      })

      test('name = Backstage ...', () => {
        const name = 'Backstage passes to a TAFKAL80ETC concert'
        const quality = 10

        const gildedRose = new Shop([new Item(name, sellIn, quality)])
        const items = gildedRose.updateQuality()

        expect(items[0].name).to.equal(name)
        expect(items[0].quality).to.equal(quality - quality)
      })
    })

    describe('name = Aged Brie', () => {
      const name = 'Aged Brie'

      test('quality < 50', () => {
        const quality = 40

        const gildedRose = new Shop([new Item(name, sellIn, quality)])
        const items = gildedRose.updateQuality()

        expect(items[0].name).to.equal(name)
        expect(items[0].quality).to.equal(quality + 2)
      })

      test('quality >= 50', () => {
        const quality = 55

        const gildedRose = new Shop([new Item(name, sellIn, quality)])
        const items = gildedRose.updateQuality()

        expect(items[0].name).to.equal(name)
        expect(items[0].quality).to.equal(quality)
      })
    })
  })

  test('sellIn >= 0', () => {
    const name = 'foo'
    const sellIn = 2

    const gildedRose = new Shop([new Item(name, sellIn, 0)])
    const items = gildedRose.updateQuality()

    expect(items[0].name).to.equal(name)
    expect(items[0].sellIn).to.equal(sellIn -1)
  })
});
