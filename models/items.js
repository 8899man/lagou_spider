var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var co = require('co');

var ItemsSchema = new Schema({
  approved: {
    type: Boolean
  },
  attributes: {
    type: Object
  },
  availability: {
    type: Boolean
  },
  brand: {
    type: String
  },
  color_images: {
    type: Array
  },
  delta: {
    type: Number
  },
  description: {
    type: String
  },
  details: {
    type: Array
  },
  discount: {
    type: Number
  },
  item_id: {
    type: String
  },
  main_category: {
    type: String
  },
  mall: {
    type: String
  },
  original_price: {
    type: Number
  },
  primary_img: {
    type: String
  },
  sale_price: {
    type: Number
  },
  sex_tag: {
    type: String
  },
  sub_category: {
    type: String
  },
  tags: {
    type: Array
  },
  title: {
    type: String
  },
  url: {
    type: String
  },


  status: {
    type: String
  },

  interval: {
    type: Number
  },
  retry: {
    type: Number
  },

  created_at: {
    type: Date
  },
  updated_at: {
    type: Date
  },
  watch_started_at: {
    type: Date
  },

  checked: {
    type: Boolean
  },

  editor: {
    type: String
  },
  category_editor: String,

  size_lookup: {
    type: Object
  },
  description_cn: {
    type: String
  },
  title_cn: {
    type: String
  }
});

ItemsSchema.statics.getItem = function *(query) {
    var _select = [
        "attributes",
        "availability",
        "brand",
        "color_images",
        "decription",
        "details",
        "item_id",
        "main_categore",
        "sub_category",
        "mall",
        "sex_tag",
        "primary_img",
        "tags",
        "title",
        "url"
    ];
    var item = yield this.findOne(query).select(_select.join(' '));
    if (item.length < 0) {
        return {};
    }
    return item;
};

module.exports = mongoose.model('Item', ItemsSchema);
