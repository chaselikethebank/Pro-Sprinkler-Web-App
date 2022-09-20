
ActiveRecord::Schema.define(version: 2022_09_06_204346) do

  enable_extension "plpgsql"

  create_table "cets", force: :cascade do |t|
    t.integer "January"
    t.integer "February"
    t.integer "March"
    t.integer "April"
    t.integer "May"
    t.integer "June"
    t.integer "July"
    t.integer "August"
    t.integer "September"
    t.integer "October"
    t.integer "November"
    t.integer "December"
    t.string "city"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "cities", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "systems", force: :cascade do |t|
    t.integer "zone"
    t.string "rotor_spray"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_systems_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.string "cet"
    t.bigint "cet_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["cet_id"], name: "index_users_on_cet_id"
  end

  add_foreign_key "systems", "users"
  add_foreign_key "users", "cets"
end
