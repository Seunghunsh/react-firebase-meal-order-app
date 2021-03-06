import React from "react";
import { shallow, mount, render } from 'enzyme';
import Order from "./Order";

describe("Order is mounted", () => {
  let props;
  let mountedOrder;
  const order = () => {
    if (!mountedOrder) {
      mountedOrder = mount(
        <Order {...props} />
      );
    }
    return mountedOrder;
  }

  // beforeEach(() => {
  //   props = {
  //     menues: undefined,
  //     order: undefined,
  //     removeFromOrder: undefined,
  //     placeOrder: undefined
  //   };
  //   mountedOrder = undefined
  // });

  beforeEach(() => {
    props = {
      menues: {
        menu1: {
          name: 'Pacific Halibut',
          image: 'http://i.istockimg.com/file_thumbview_approve/36248396/5/stock-photo-36248396-blackened-cajun-sea-bass.jpg',
          desc: 'Everyones favorite white fish. We will cut it to the size you need and ship it.',
          price: 1724,
          status: 'available'
        },

        menu2: {
          name: 'Lobster',
          image: 'http://i.istockimg.com/file_thumbview_approve/32135274/5/stock-photo-32135274-cooked-lobster.jpg',
          desc: 'These tender, mouth-watering beauties are a fantastic hit at any dinner party.',
          price: 3200,
          status: 'available'
        },

        menu3: {
          name: 'Sea Scallops',
          image: 'http://i.istockimg.com/file_thumbview_approve/58624176/5/stock-photo-58624176-scallops-on-black-stone-plate.jpg',
          desc: 'Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound',
          price: 1684,
          status: 'unavailable'
        },

        menu4: {
          name: 'Mahi Mahi',
          image: 'http://i.istockimg.com/file_thumbview_approve/12556651/5/stock-photo-12556651-mahimahi.jpg',
          desc: 'Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ',
          price: 1129,
          status: 'available'
        },

        menu5: {
          name: 'King Crab',
          image: 'http://i.istockimg.com/file_thumbview_approve/18294110/5/stock-photo-18294110-king-crab-legs.jpg',
          desc: 'Crack these open and enjoy them plain or with one of our cocktail sauces',
          price: 4234,
          status: 'available'
        },

        menu6: {
          name: 'Atlantic Salmon',
          image: 'http://i.istockimg.com/file_thumbview_approve/56241842/5/stock-photo-56241842-salmon-menu.jpg',
          desc: 'This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!',
          price: 1453,
          status: 'available'
        },

        menu7: {
          name: 'Oysters',
          image: 'http://i.istockimg.com/file_thumbview_approve/58626682/5/stock-photo-58626682-fresh-oysters-on-a-black-stone-plate-top-view.jpg',
          desc: 'A soft plump oyster with a sweet salty flavor and a clean finish.',
          price: 2543,
          status: 'available'
        },

        menu8: {
          name: 'Mussels',
          image: 'http://i.istockimg.com/file_thumbview_approve/40450406/5/stock-photo-40450406-steamed-mussels.jpg',
          desc: 'The best mussels from the Pacific Northwest with a full-flavored and complex taste.',
          price: 425,
          status: 'available'
        },

        menu9: {
          name: 'Jumbo Prawns',
          image: 'http://i.istockimg.com/file_thumbview_approve/67121439/5/stock-photo-67121439-fresh-tiger-shrimp-on-ice-on-a-black-stone-table.jpg',
          desc: 'With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.',
          price: 2250,
          status: 'available'
        }
      },
      order: {
        name: 'seunghun Lee',
        status: 'ordered',
        option: 'rare',
        menu1: 3
      },
      removeFromOrder: jest.fn(),
      placeOrder: jest.fn()
    };
    mountedOrder = undefined
  });

  // All tests will go here
  describe("the rendered div", () => {
    it("contains everything else that gets rendered", () => {
      const divs = order().find("div");
      // When using .find, enzyme arranges the nodes in order such
      // that the outermost node is first in the list. So we can
      // use .first() to get the outermost div.
      const wrappingDiv = divs.first();

      // Enzyme omits the outermost node when using the .children()
      // method on lockScreen(). This is annoying, but we can use it
      // to verify that wrappingDiv contains everything else this
      // component renders.
      expect(wrappingDiv.children()).toEqual(order().children());
    });
  });

  it("always renders two buttons properly", () => {
    expect(order().find('button').length).toBe(2);
  });
// describe("rendered `Order display`", () => {
//   it("does not receive any props", () => {
//     const clockDisplay = mountedOrder().find(ClockDisplay);
//     expect(Object.keys(clockDisplay.props()).length).toBe(0);
//   });
// });

  describe("when `placeOrder` is defined", () => {
    beforeEach(() => {
      props.placeOrder = jest.fn();
    });

    it("sets the rendered `SlideToUnlock`'s `onSlide` prop to the same value as `onUnlocked`'", () => {
      expect(order().props().placeOrder).toBe(props.placeOrder);
    });
  });

});
