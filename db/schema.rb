# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_08_10_024734) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "favorited_teas", force: :cascade do |t|
    t.string "personal_notes"
    t.decimal "user_rating"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "vendor_id", null: false
    t.index ["vendor_id"], name: "index_favorited_teas_on_vendor_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "description"
    t.decimal "rating"
    t.string "summary"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id", null: false
    t.bigint "vendor_id", null: false
    t.bigint "tea_id"
    t.index ["tea_id"], name: "index_reviews_on_tea_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
    t.index ["vendor_id"], name: "index_reviews_on_vendor_id"
  end

  create_table "teas", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "price"
    t.string "category"
    t.decimal "user_rating"
    t.decimal "vendor_rating"
    t.string "vendor_item_url"
    t.string "vendor_item_notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "vendor_id", null: false
    t.index ["vendor_id"], name: "index_teas_on_vendor_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.boolean "premium_user"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "vendors", force: :cascade do |t|
    t.string "name"
    t.string "url"
    t.string "description"
    t.string "website_thumbnail"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "favorited_teas", "vendors"
  add_foreign_key "reviews", "teas"
  add_foreign_key "reviews", "users"
  add_foreign_key "reviews", "vendors"
  add_foreign_key "teas", "vendors"
end
