// server_cost.js - 1.6GB - prints the thing that u/NoCarrotOnlyPotato wants (but better) onto the terminal
export const main = async function (ns) {
  void_print_message(ns);
};

// functions
const object_get_constants = function(ns) {
  // a lot of these are from https://github.com/danielyxie/bitburner/blob/master/src/Constants.js
  // can replace `55e3` with `ns.getPurchasedServerCost(1)`
  const BaseCostFor1GBOfRamServer = 55e3;
  // can replace `1048576` with `ns.getPurchasedServerMaxRam()`
  const PurchasedServerMaxRam = 1048576;
  return {
    BaseCostFor1GBOfRamServer: BaseCostFor1GBOfRamServer,
    integer_server_ram_min: 2,
    PurchasedServerMaxRam: PurchasedServerMaxRam,
    integer_server_cost_max: BaseCostFor1GBOfRamServer * PurchasedServerMaxRam,
    string_column_title_1: "RAM (GB)",
    string_column_title_2: "Long Cost ($)",
    string_column_title_3: "Short Cost ($)",
    string_separator_column: " █ ",
    string_separator_row: "█",
  };
};

const string_get_number_abbreviated = function (float_number) {
  const string_suffixes = ["", "k", "M", "B", "T", "P", "E", "Z", "Y"];

  let
    float_number_new = float_number.toFixed(0),
    integer_index_suffix = 0;
  for (; float_number_new >= 1e3; )
    (float_number_new /= 1e3), ++integer_index_suffix;

  return `${float_number_new.toFixed(0)}${
    string_suffixes[integer_index_suffix]
  }`;
};

const string_line = function (ns, integer_ram) {
  const
    object_constants = object_get_constants(ns),
    integer_cost = object_constants.BaseCostFor1GBOfRamServer * integer_ram
  return `${
    integer_ram
    .toString()
    .padEnd(integer_get_padding_column_1(ns))
  }${object_constants.string_separator_column}${
    integer_cost
    .toLocaleString()
    .padEnd(integer_get_padding_column_2(ns))
  }${object_constants.string_separator_column}${string_get_number_abbreviated(integer_cost)}`;
};

const string_get_header = function (ns) {
  const object_constants = object_get_constants(ns);
  return `${
    (object_constants.string_column_title_1)
    .padEnd(integer_get_padding_column_1(ns))
  }${object_constants.string_separator_column}${
    (object_constants.string_column_title_2)
    .padEnd(integer_get_padding_column_2(ns))
  }${object_constants.string_separator_column}${object_constants.string_column_title_3}`;
};

const string_get_contents = function (ns) {
  const object_constants = object_get_constants(ns);

  let
    string_message = "",
    integer_ram = object_constants.integer_server_ram_min;
  for (
    ;
    (string_message += string_line(ns, integer_ram)),
      object_constants.PurchasedServerMaxRam !== integer_ram;

  )
    (string_message += "\n"), (integer_ram *= 2);

  return string_message;
};

const integer_get_padding_column_1 = function (ns) {
  const object_constants = object_get_constants(ns);
  return Math.max(
    object_constants.PurchasedServerMaxRam
    .toString()
    .length,
    object_constants.string_column_title_1
    .toString()
    .length
  );
};

const integer_get_padding_column_2 = function (ns) {
  const object_constants = object_get_constants(ns);
  return Math.max(
    object_constants.integer_server_cost_max
    .toLocaleString()
    .length,
    object_constants.string_column_title_2
    .toString()
    .length
  );
};

const integer_get_padding_row = function (ns) {
  return Math.max(
    string_get_header(ns).length,
    // using `integer_server_ram_min` here is a bad hack. what it *should* do is use the length of the longest row.
    string_line(ns, object_get_constants(ns).integer_server_ram_min).length
  );
};

const void_print_message = function (ns) {
  ns.tprint(
    `\n${string_get_header(ns)}\n${"".padEnd(
      integer_get_padding_row(ns),
      object_get_constants(ns).string_separator_row
    )}\n${string_get_contents(ns)}`
  );
};