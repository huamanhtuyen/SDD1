import { Product, Review } from '../lib/types';

// ====== PRODUCT TEMPLATES PER SUBCATEGORY ======

const productTemplates: Record<string, { brands: string[], models: string[], priceRange: [number, number], specs: Record<string, string[]> }> = {
  // LINH KIỆN PC
  cpu: {
    brands: ['Intel', 'AMD'],
    models: ['Core i9-14900K', 'Core i9-14900KF', 'Core i7-14700K', 'Core i7-14700KF', 'Core i5-14600K', 'Core i5-14600KF', 'Core i5-14400F', 'Core i3-14100F', 'Ryzen 9 7950X', 'Ryzen 9 7900X', 'Ryzen 7 7800X3D', 'Ryzen 7 7700X', 'Ryzen 5 7600X', 'Ryzen 5 7600', 'Ryzen 5 5600X', 'Ryzen 5 5600', 'Core i9-13900K', 'Core i7-13700K', 'Core i5-13600K', 'Ryzen 9 5950X', 'Ryzen 7 5800X', 'Ryzen 9 7950X3D', 'Core i7-14700', 'Core i5-14500', 'Ryzen 7 7700', 'Core i9-12900K', 'Core i7-12700K', 'Ryzen 5 5500', 'Core i3-12100F', 'Ryzen 3 4100'],
    priceRange: [1890000, 16990000],
    specs: { 'Số nhân': ['6', '8', '12', '16', '24'], 'Số luồng': ['12', '16', '20', '24', '32'], 'Xung nhịp': ['3.4 GHz', '3.6 GHz', '3.8 GHz', '4.2 GHz', '4.7 GHz', '5.0 GHz', '5.2 GHz', '5.8 GHz'], 'Socket': ['LGA 1700', 'AM5', 'LGA 1200', 'AM4'], 'TDP': ['65W', '105W', '125W', '150W', '170W', '253W'] },
  },
  vga: {
    brands: ['ASUS', 'MSI', 'Gigabyte', 'EVGA', 'Zotac', 'Colorful', 'Palit', 'Galax', 'Sapphire', 'XFX', 'PowerColor'],
    models: ['RTX 4090', 'RTX 4080 SUPER', 'RTX 4070 Ti SUPER', 'RTX 4070 SUPER', 'RTX 4070', 'RTX 4060 Ti', 'RTX 4060', 'RTX 3060', 'RTX 3060 Ti', 'RX 7900 XTX', 'RX 7900 XT', 'RX 7800 XT', 'RX 7700 XT', 'RX 7600', 'RTX 4080', 'RTX 4070 Ti', 'RX 6700 XT', 'RTX 3050', 'Arc A770', 'Arc A750', 'RTX 4090 ROG STRIX', 'RTX 4080 GAMING X TRIO', 'RX 7900 GRE', 'GTX 1650', 'RTX 3070'],
    priceRange: [3990000, 54990000],
    specs: { 'VRAM': ['4GB', '6GB', '8GB', '12GB', '16GB', '24GB'], 'Bus': ['128-bit', '192-bit', '256-bit', '320-bit', '384-bit'], 'Xung nhịp': ['1500 MHz', '1800 MHz', '2000 MHz', '2200 MHz', '2500 MHz', '2520 MHz'], 'Chip': ['NVIDIA', 'AMD', 'Intel Arc'] },
  },
  ram: {
    brands: ['Kingston', 'Corsair', 'G.Skill', 'TeamGroup', 'Crucial', 'ADATA', 'PNY'],
    models: ['FURY Beast DDR5 16GB', 'FURY Beast DDR5 32GB', 'Vengeance DDR5 16GB', 'Vengeance DDR5 32GB', 'Trident Z5 RGB DDR5 32GB', 'Trident Z5 Neo DDR5 32GB', 'T-Force Delta RGB DDR5 32GB', 'Crucial DDR5 16GB', 'Vengeance LPX DDR4 16GB', 'FURY Beast DDR4 16GB', 'Trident Z Neo DDR4 32GB', 'T-Force Vulcan DDR4 16GB', 'Crucial Ballistix DDR4 16GB', 'Vengeance RGB DDR5 64GB', 'FURY Renegade DDR5 32GB', 'Dominator Platinum DDR5 32GB'],
    priceRange: [590000, 5990000],
    specs: { 'Dung lượng': ['8GB', '16GB', '32GB', '64GB'], 'Loại': ['DDR4', 'DDR5'], 'Bus': ['3200 MHz', '3600 MHz', '4800 MHz', '5200 MHz', '5600 MHz', '6000 MHz', '6400 MHz', '7200 MHz'], 'Số thanh': ['1', '2'] },
  },
  'ssd-hdd': {
    brands: ['Samsung', 'WD', 'Kingston', 'Crucial', 'Seagate', 'Toshiba', 'ADATA', 'Lexar'],
    models: ['990 PRO 1TB', '990 PRO 2TB', '980 PRO 1TB', '970 EVO Plus 1TB', 'SN850X 1TB', 'SN850X 2TB', 'SN770 1TB', 'SN580 1TB', 'NV2 1TB', 'NV2 2TB', 'P3 Plus 1TB', 'P5 Plus 1TB', 'T500 1TB', 'Barracuda 2TB HDD', 'Barracuda 4TB HDD', 'IronWolf 4TB NAS', 'NM790 1TB', 'NM620 512GB', 'Legend 850 1TB', 'KC3000 1TB'],
    priceRange: [490000, 8990000],
    specs: { 'Dung lượng': ['256GB', '512GB', '1TB', '2TB', '4TB'], 'Loại': ['NVMe M.2', 'SATA SSD', 'HDD 3.5"'], 'Đọc': ['500 MB/s', '2100 MB/s', '3500 MB/s', '5000 MB/s', '7000 MB/s', '7450 MB/s'], 'Ghi': ['400 MB/s', '1800 MB/s', '3000 MB/s', '4000 MB/s', '5000 MB/s', '6900 MB/s'] },
  },
  mainboard: {
    brands: ['ASUS', 'MSI', 'Gigabyte', 'ASRock'],
    models: ['ROG STRIX Z790-E', 'ROG STRIX B760-F', 'ROG STRIX X670E-E', 'TUF GAMING B760M-PLUS', 'PRIME B760M-A', 'MAG Z790 TOMAHAWK', 'MPG B760I EDGE', 'PRO B760M-A', 'MAG X670E TOMAHAWK', 'Z790 AORUS Master', 'B760M AORUS ELITE', 'B650 AORUS ELITE AX', 'B760M Steel Legend', 'X670E Taichi', 'B650M PG Riptide', 'ROG STRIX B650E-F', 'TUF GAMING B650-PLUS', 'MPG Z790 CARBON WIFI'],
    priceRange: [1990000, 15990000],
    specs: { 'Socket': ['LGA 1700', 'AM5', 'AM4'], 'Chipset': ['Z790', 'B760', 'X670E', 'B650', 'B550', 'Z690'], 'RAM': ['DDR4', 'DDR5'], 'Form': ['ATX', 'Micro-ATX', 'Mini-ITX'] },
  },
  psu: {
    brands: ['Corsair', 'EVGA', 'Seasonic', 'Thermaltake', 'Cooler Master', 'MSI', 'be quiet!', 'NZXT'],
    models: ['RM850x', 'RM1000x', 'RM750x', 'SuperNOVA 850 G7', 'FOCUS GX-850', 'FOCUS GX-1000', 'Toughpower GF3 850W', 'MWE Gold 850', 'V850 SFX', 'MAG A850GL', 'Dark Power Pro 12', 'C850', 'RM650x', 'SuperNOVA 750 G6', 'MWE Gold 750'],
    priceRange: [1290000, 5990000],
    specs: { 'Công suất': ['550W', '650W', '750W', '850W', '1000W', '1200W'], 'Chuẩn': ['80 Plus Gold', '80 Plus Platinum', '80 Plus Bronze', 'ATX 3.0'], 'Loại': ['Full Modular', 'Semi Modular', 'Non Modular'] },
  },
  'case': {
    brands: ['NZXT', 'Corsair', 'Lian Li', 'Phanteks', 'Cooler Master', 'Thermaltake', 'be quiet!', 'Fractal Design'],
    models: ['H5 Flow', 'H7 Flow', 'H9 Elite', '4000D Airflow', '5000D Airflow', 'iCUE 4000X', 'O11 Dynamic EVO', 'O11 Dynamic Mini', 'Lancool III', 'Eclipse P400A', 'NR200P', 'MasterBox Q300L', 'H700i', 'Pure Base 500DX', 'North', 'Torrent', 'View 51 TG', 'A1 Plus'],
    priceRange: [890000, 6990000],
    specs: { 'Form': ['Mid Tower', 'Full Tower', 'Mini ITX', 'Micro ATX'], 'Fan kèm': ['0', '2', '3', '4'], 'Chất liệu': ['Kính cường lực', 'Thép', 'Nhôm', 'Mesh'] },
  },
  'tan-nhiet': {
    brands: ['Noctua', 'be quiet!', 'Corsair', 'NZXT', 'Cooler Master', 'Arctic', 'DeepCool', 'Thermalright'],
    models: ['NH-D15', 'NH-U12S', 'Dark Rock Pro 4', 'Dark Rock 4', 'iCUE H150i ELITE', 'iCUE H100i RGB', 'Kraken X63', 'Kraken Z73', 'Hyper 212', 'MasterLiquid ML360R', 'Liquid Freezer II 360', 'LT720', 'AK620', 'Peerless Assassin 120', 'Assassin X 120', 'FC140'],
    priceRange: [390000, 5990000],
    specs: { 'Loại': ['Tản khí', 'Tản nước AIO 240mm', 'Tản nước AIO 360mm', 'Tản nước AIO 280mm'], 'TDP hỗ trợ': ['150W', '200W', '250W', '300W'], 'Socket': ['LGA 1700 / AM5', 'LGA 1200 / AM4', 'Đa nền tảng'] },
  },
  // LAPTOP
  'laptop-gaming': {
    brands: ['ASUS', 'MSI', 'Lenovo', 'Acer', 'HP', 'Dell', 'Razer', 'Gigabyte'],
    models: ['ROG Strix G16', 'ROG Strix SCAR 18', 'ROG Zephyrus G14', 'TUF Gaming A15', 'Katana 15', 'Raider GE78', 'Stealth 16', 'Legion Pro 5', 'Legion 5', 'Predator Helios Neo 16', 'Nitro V 15', 'Victus 16', 'OMEN 16', 'Alienware m16 R2', 'G15 5530', 'Blade 16', 'AORUS 16X', 'G5 KF'],
    priceRange: [15990000, 89990000],
    specs: { 'CPU': ['Intel Core i7-14700HX', 'Intel Core i9-14900HX', 'AMD Ryzen 7 7840HS', 'AMD Ryzen 9 7945HX', 'Intel Core i5-14500HX'], 'GPU': ['RTX 4060', 'RTX 4070', 'RTX 4080', 'RTX 4090', 'RTX 4050'], 'RAM': ['16GB DDR5', '32GB DDR5', '64GB DDR5'], 'Màn hình': ['15.6" FHD 144Hz', '16" WQXGA 240Hz', '16" QHD+ 240Hz', '18" QHD+ 240Hz', '14" QHD+ 165Hz'] },
  },
  'laptop-van-phong': {
    brands: ['Dell', 'HP', 'Lenovo', 'ASUS', 'Acer', 'Apple'],
    models: ['Inspiron 15', 'Latitude 5540', 'Vostro 3520', 'ProBook 450 G10', 'EliteBook 840 G10', 'ThinkPad E16', 'ThinkBook 16', 'IdeaPad Slim 5', 'Vivobook 15', 'Vivobook S 14', 'Aspire 5', 'Swift Go 14', 'MacBook Air M3', 'MacBook Air M2', 'ProBook 440 G10'],
    priceRange: [9990000, 35990000],
    specs: { 'CPU': ['Intel Core i5-1340P', 'Intel Core i7-1360P', 'AMD Ryzen 5 7530U', 'AMD Ryzen 7 7730U', 'Apple M3', 'Apple M2'], 'RAM': ['8GB', '16GB', '24GB'], 'SSD': ['256GB', '512GB', '1TB'], 'Màn hình': ['14" FHD', '15.6" FHD', '16" WUXGA', '13.6" Liquid Retina'] },
  },
  ultrabook: {
    brands: ['Apple', 'Dell', 'ASUS', 'Lenovo', 'HP', 'LG', 'Microsoft'],
    models: ['MacBook Pro 14 M3 Pro', 'MacBook Pro 16 M3 Max', 'MacBook Air 15 M3', 'XPS 14', 'XPS 16', 'Zenbook 14 OLED', 'Zenbook S 13 OLED', 'Yoga Slim 7 Pro', 'Spectre x360 14', 'gram 16', 'Surface Laptop 6', 'ThinkPad X1 Carbon Gen 11'],
    priceRange: [22990000, 79990000],
    specs: { 'CPU': ['Apple M3 Pro', 'Apple M3 Max', 'Intel Core Ultra 7', 'Intel Core Ultra 9', 'AMD Ryzen 7 8840U'], 'RAM': ['16GB', '18GB', '32GB', '36GB', '64GB'], 'Màn hình': ['14" 2.8K OLED', '14.5" 3.2K OLED', '16" Liquid Retina XDR', '13.3" 2.8K OLED', '16" 3.2K OLED'], 'Pin': ['8h', '10h', '12h', '15h', '18h', '22h'] },
  },
  'laptop-workstation': {
    brands: ['Dell', 'HP', 'Lenovo', 'ASUS'],
    models: ['Precision 5690', 'Precision 7780', 'ZBook Fury 16 G10', 'ZBook Studio G10', 'ThinkPad P16 Gen 2', 'ThinkPad P1 Gen 6', 'ProArt Studiobook Pro 16', 'ProArt Studiobook 16 OLED'],
    priceRange: [35990000, 119990000],
    specs: { 'CPU': ['Intel Core i9-14900HX', 'Intel Xeon W-3500', 'AMD Ryzen 9 PRO 7945'], 'GPU': ['NVIDIA RTX A2000', 'NVIDIA RTX A3000', 'NVIDIA RTX 5000 Ada', 'NVIDIA RTX 4000 Ada'], 'RAM': ['32GB ECC', '64GB ECC', '128GB ECC'], 'Màn hình': ['16" UHD+ OLED', '16" 4K+', '17.3" 4K'] },
  },
  // ĐIỆN THOẠI
  iphone: {
    brands: ['Apple'],
    models: ['iPhone 16 Pro Max 256GB', 'iPhone 16 Pro Max 512GB', 'iPhone 16 Pro Max 1TB', 'iPhone 16 Pro 256GB', 'iPhone 16 Pro 512GB', 'iPhone 16 256GB', 'iPhone 16 Plus 256GB', 'iPhone 15 Pro Max 256GB', 'iPhone 15 Pro 256GB', 'iPhone 15 256GB', 'iPhone 15 Plus 256GB', 'iPhone 14 128GB', 'iPhone 14 Plus 128GB', 'iPhone SE 2022 64GB', 'iPhone 13 128GB'],
    priceRange: [10990000, 46990000],
    specs: { 'Chip': ['A18 Pro', 'A18', 'A17 Pro', 'A16 Bionic', 'A15 Bionic'], 'Màn hình': ['6.9" Super Retina XDR', '6.7" Super Retina XDR', '6.3" Super Retina XDR', '6.1" Super Retina XDR'], 'Camera': ['48MP + 12MP + 12MP', '48MP + 12MP', '12MP + 12MP'], 'Pin': ['4685 mAh', '4441 mAh', '4383 mAh', '3349 mAh'] },
  },
  samsung: {
    brands: ['Samsung'],
    models: ['Galaxy S24 Ultra 256GB', 'Galaxy S24 Ultra 512GB', 'Galaxy S24+ 256GB', 'Galaxy S24 256GB', 'Galaxy Z Fold6 256GB', 'Galaxy Z Flip6 256GB', 'Galaxy A55 5G', 'Galaxy A35 5G', 'Galaxy A15', 'Galaxy S23 Ultra 256GB', 'Galaxy S23 FE', 'Galaxy A54 5G', 'Galaxy M34 5G', 'Galaxy Z Fold5 256GB'],
    priceRange: [3990000, 39990000],
    specs: { 'Chip': ['Snapdragon 8 Gen 3', 'Snapdragon 8 Gen 2', 'Exynos 2400', 'Exynos 1380', 'Dimensity 6100+'], 'Màn hình': ['6.8" QHD+ Dynamic AMOLED', '6.7" FHD+ Dynamic AMOLED', '6.2" FHD+ Dynamic AMOLED', '7.6" QXGA+ Foldable'], 'Camera': ['200MP + 12MP + 50MP + 10MP', '50MP + 12MP + 10MP', '50MP + 8MP + 5MP'], 'Pin': ['5000 mAh', '4900 mAh', '4000 mAh', '3700 mAh'] },
  },
  xiaomi: {
    brands: ['Xiaomi'],
    models: ['Xiaomi 14 Ultra', 'Xiaomi 14 Pro', 'Xiaomi 14', 'Redmi Note 13 Pro+ 5G', 'Redmi Note 13 Pro 5G', 'Redmi Note 13 5G', 'Redmi 13C', 'POCO X6 Pro 5G', 'POCO F6 5G', 'Xiaomi 13T Pro', 'Xiaomi 13T', 'Redmi K70 Pro', 'Redmi Note 12 Pro+ 5G'],
    priceRange: [2990000, 25990000],
    specs: { 'Chip': ['Snapdragon 8 Gen 3', 'Snapdragon 8 Gen 2', 'Dimensity 7200 Ultra', 'Dimensity 7050', 'Helio G85'], 'Màn hình': ['6.73" 2K LTPO AMOLED', '6.67" FHD+ AMOLED 120Hz', '6.74" FHD+ IPS'], 'Camera': ['50MP Leica + 50MP + 50MP', '200MP + 8MP + 2MP', '108MP + 8MP + 2MP'], 'Pin': ['5000 mAh', '5100 mAh', '5500 mAh', '4820 mAh'] },
  },
  oppo: {
    brands: ['OPPO'],
    models: ['Find X7 Ultra', 'Find N3', 'Reno11 Pro 5G', 'Reno11 5G', 'Reno10 5G', 'A98 5G', 'A79 5G', 'A58', 'A38', 'A18', 'A17k', 'Find X6 Pro'],
    priceRange: [2490000, 29990000],
    specs: { 'Chip': ['Snapdragon 8 Gen 3', 'Dimensity 8200', 'Dimensity 7050', 'Snapdragon 695', 'Helio G85'], 'Màn hình': ['6.82" 2K LTPO AMOLED', '6.7" FHD+ AMOLED', '6.56" FHD+ LCD'], 'Camera': ['50MP + 50MP + 64MP', '50MP + 32MP + 8MP', '50MP + 2MP'], 'Pin': ['5000 mAh', '5400 mAh', '4600 mAh'] },
  },
  vivo: {
    brands: ['Vivo'],
    models: ['X100 Pro', 'X100', 'V30 Pro 5G', 'V30 5G', 'V29e 5G', 'Y36', 'Y27', 'Y17s', 'iQOO 12', 'iQOO Neo 9 Pro'],
    priceRange: [2990000, 22990000],
    specs: { 'Chip': ['Dimensity 9300', 'Snapdragon 8 Gen 2', 'Snapdragon 7 Gen 3', 'Helio G85'], 'Màn hình': ['6.78" 2K LTPO AMOLED', '6.67" FHD+ AMOLED', '6.56" FHD+ LCD'], 'Camera': ['50MP Zeiss + 50MP + 50MP', '50MP + 8MP + 2MP'], 'Pin': ['5000 mAh', '5500 mAh', '4600 mAh'] },
  },
  // MÀN HÌNH
  'man-hinh-gaming': {
    brands: ['ASUS', 'MSI', 'LG', 'Dell', 'Samsung', 'AOC', 'BenQ', 'Gigabyte', 'ViewSonic'],
    models: ['ROG Swift PG27AQDM', 'ROG Swift PG32UCDM', 'TUF Gaming VG27AQ1A', 'MAG 274QRF-QD', 'MPG 321URX', 'UltraGear 27GR95QE', '27GP850-B', 'AW2725DF', 'Odyssey G7 32"', 'AGON AG274QZM', 'EX2710Q', 'M27Q X', 'XG270QG'],
    priceRange: [4990000, 32990000],
    specs: { 'Kích thước': ['24.5"', '27"', '32"', '34"'], 'Độ phân giải': ['FHD 1920x1080', 'QHD 2560x1440', '4K 3840x2160'], 'Tần số quét': ['144Hz', '165Hz', '180Hz', '240Hz', '360Hz'], 'Tấm nền': ['IPS', 'VA', 'OLED', 'Fast IPS', 'QD-OLED'], 'Thời gian phản hồi': ['0.03ms', '0.5ms', '1ms', '2ms'] },
  },
  'man-hinh-4k': {
    brands: ['LG', 'Dell', 'ASUS', 'Samsung', 'BenQ', 'Apple'],
    models: ['UltraFine 27UN850-W', '27UP850-W', 'U2723QE', 'ProArt PA279CRV', 'ProArt PA329CRV', 'ViewFinity S8 27"', 'PD2725U', 'Studio Display', 'Pro Display XDR'],
    priceRange: [7990000, 139990000],
    specs: { 'Kích thước': ['27"', '32"'], 'Độ phân giải': ['4K 3840x2160', '5K 5120x2880', '6K 6016x3384'], 'Tấm nền': ['IPS', 'Nano IPS', 'IPS Black'], 'Màu sắc': ['99% sRGB', '95% DCI-P3', '99% DCI-P3', '100% Adobe RGB'] },
  },
  'man-hinh-ultrawide': {
    brands: ['LG', 'Dell', 'Samsung', 'ASUS', 'MSI'],
    models: ['34WN80C-B', '34GP63A-B', '40WP95X-W', 'U3423WE', 'AW3423DWF', 'Odyssey G9 49"', 'ROG Swift PG349Q', 'MEG 342C QD-OLED'],
    priceRange: [8990000, 42990000],
    specs: { 'Kích thước': ['34"', '38"', '40"', '49"'], 'Tỉ lệ': ['21:9', '32:9'], 'Độ phân giải': ['UWQHD 3440x1440', 'WQHD+ 3840x1600', 'DQHD 5120x1440'], 'Tần số quét': ['60Hz', '100Hz', '144Hz', '175Hz', '240Hz'] },
  },
  'man-hinh-van-phong': {
    brands: ['Dell', 'LG', 'Samsung', 'HP', 'AOC', 'ViewSonic', 'Philips'],
    models: ['S2422HN', 'P2422H', 'P2723QE', '24MP400-B', '27MR400-B', 'S24C360EAL', 'M27f FHD', 'VA2432-H', '24B1XH', '272V8A'],
    priceRange: [2490000, 8990000],
    specs: { 'Kích thước': ['22"', '24"', '27"'], 'Độ phân giải': ['FHD 1920x1080', 'QHD 2560x1440'], 'Tấm nền': ['IPS', 'VA'], 'Cổng': ['HDMI', 'HDMI + VGA', 'HDMI + DP + USB-C'] },
  },
  // PHỤ KIỆN
  'chuot-gaming': {
    brands: ['Logitech', 'Razer', 'SteelSeries', 'Corsair', 'HyperX', 'Zowie', 'Pulsar', 'Lamzu', 'Endgame Gear'],
    models: ['G Pro X Superlight 2', 'G502 X Plus', 'G304', 'DeathAdder V3 Pro', 'Viper V3 Pro', 'Basilisk V3', 'Aerox 5 Wireless', 'Prime Wireless', 'DARK CORE RGB PRO', 'Pulsefire Haste 2', 'EC2-CW', 'X2 Mini', 'Atlantis Mini', 'XM2w'],
    priceRange: [290000, 3990000],
    specs: { 'DPI': ['12000', '16000', '25000', '25600', '30000', '35000'], 'Kết nối': ['Có dây', 'Wireless 2.4GHz', 'Bluetooth', 'Tri-mode'], 'Trọng lượng': ['49g', '55g', '58g', '63g', '79g', '89g', '120g'], 'Switch': ['Optical', 'Mechanical', 'Kailh 8.0'] },
  },
  'ban-phim-co': {
    brands: ['Logitech', 'Razer', 'Corsair', 'SteelSeries', 'Akko', 'Keychron', 'Ducky', 'Leopold', 'Monsgeek'],
    models: ['G Pro X TKL', 'G915 TKL', 'Huntsman V3 Pro', 'BlackWidow V4', 'K70 RGB PRO', 'K65 Plus', 'Apex Pro', 'Apex Pro Mini', '3068B Plus', '5075B Plus', 'Q1 Pro', 'V5', 'One 3 TKL', 'FC660M', 'M1'],
    priceRange: [790000, 5990000],
    specs: { 'Switch': ['Cherry MX Red', 'Cherry MX Brown', 'Cherry MX Blue', 'Gateron Yellow', 'Razer Green', 'OmniPoint', 'CS Jelly Pink'], 'Layout': ['Full-size', 'TKL', '75%', '65%', '60%'], 'Kết nối': ['Có dây USB', 'Wireless 2.4GHz', 'Bluetooth', 'Tri-mode'], 'Keycap': ['ABS', 'PBT', 'Double-shot PBT'] },
  },
  'tai-nghe': {
    brands: ['Sony', 'Apple', 'Samsung', 'Razer', 'Logitech', 'SteelSeries', 'HyperX', 'JBL', 'Sennheiser', 'Audio-Technica'],
    models: ['WH-1000XM5', 'WF-1000XM5', 'AirPods Pro 2', 'AirPods Max', 'Galaxy Buds3 Pro', 'BlackShark V2 Pro', 'Kraken V3 Pro', 'G PRO X 2', 'Arctis Nova Pro', 'Cloud III', 'Live Pro 2', 'Tune 770NC', 'Momentum 4', 'HD 660S2', 'ATH-M50xBT2'],
    priceRange: [390000, 13990000],
    specs: { 'Loại': ['Over-ear', 'In-ear TWS', 'On-ear'], 'Kết nối': ['Bluetooth 5.3', 'Bluetooth 5.2', 'Có dây 3.5mm', 'Wireless 2.4GHz'], 'ANC': ['Có', 'Không'], 'Pin': ['8h', '20h', '30h', '40h', '60h'] },
  },
  webcam: {
    brands: ['Logitech', 'Razer', 'Elgato', 'ASUS', 'AVerMedia'],
    models: ['C920s HD Pro', 'C922 Pro', 'BRIO 4K', 'C930e', 'Kiyo Pro Ultra', 'Kiyo X', 'Facecam Pro', 'Facecam', 'ROG Eye S', 'PW515'],
    priceRange: [590000, 7990000],
    specs: { 'Độ phân giải': ['720p', '1080p 30fps', '1080p 60fps', '4K 30fps', '4K 60fps'], 'Mic': ['Stereo', 'Đơn', 'Không'], 'Kết nối': ['USB-A', 'USB-C'] },
  },
  'lot-chuot': {
    brands: ['SteelSeries', 'Razer', 'Logitech', 'Corsair', 'Artisan', 'Pulsar', 'LGG'],
    models: ['QcK Heavy Large', 'QcK Prism XL RGB', 'Gigantus V2 XL', 'Strider', 'G840 XL', 'MM700 RGB', 'Hayate Otsu', 'Paracontrol V2', 'Saturn Pro XL'],
    priceRange: [190000, 1990000],
    specs: { 'Kích thước': ['450x400mm', '900x400mm', '1200x600mm'], 'Bề mặt': ['Vải mềm (Control)', 'Hybrid (Speed)', 'Hard', 'Glass'], 'LED RGB': ['Có', 'Không'] },
  },
  // ĐIỆN MÁY
  tv: {
    brands: ['Samsung', 'LG', 'Sony', 'TCL', 'Xiaomi'],
    models: ['Neo QLED 4K 55" QN85D', 'Neo QLED 8K 65" QN900D', 'OLED S95D 65"', 'Crystal UHD 55" DU7000', 'OLED evo C4 55"', 'OLED evo G4 65"', 'NanoCell 55NANO76SRA', 'BRAVIA XR A95L 65"', 'X90L 55"', 'QLED C65B 55"', 'P745 55"', 'TV A Pro 55"', 'QLED Q6F 55"'],
    priceRange: [5990000, 89990000],
    specs: { 'Kích thước': ['43"', '50"', '55"', '65"', '75"', '85"'], 'Độ phân giải': ['Full HD', '4K UHD', '8K'], 'Tấm nền': ['QLED', 'OLED', 'Neo QLED', 'LED', 'Mini LED', 'QD-OLED'], 'Smart TV': ['Tizen', 'webOS', 'Google TV', 'Android TV'] },
  },
  'loa-bluetooth': {
    brands: ['JBL', 'Sony', 'Marshall', 'Bose', 'Harman Kardon', 'Bang & Olufsen'],
    models: ['Charge 5', 'Flip 6', 'Boombox 3', 'Xtreme 3', 'Clip 4', 'SRS-XB100', 'SRS-XE300', 'Emberton II', 'Stanmore III', 'SoundLink Flex', 'SoundLink Revolve+ II', 'Aura Studio 4', 'Onyx Studio 8', 'Beosound A1'],
    priceRange: [790000, 15990000],
    specs: { 'Công suất': ['5W', '20W', '30W', '50W', '80W'], 'Pin': ['8h', '10h', '12h', '20h', '24h'], 'Chống nước': ['IPX5', 'IPX7', 'IP67', 'Không'], 'Kết nối': ['Bluetooth 5.3', 'Bluetooth 5.1', 'Bluetooth + AUX'] },
  },
  'may-loc-khong-khi': {
    brands: ['Xiaomi', 'Sharp', 'Panasonic', 'Dyson', 'Samsung', 'Daikin', 'Levoit'],
    models: ['Air Purifier 4 Pro', 'Air Purifier 4 Lite', 'FP-J80E-W', 'F-PXV45', 'Purifier Big Quiet+', 'AX53J7100WT', 'MCK70Y', 'Core 300S'],
    priceRange: [1990000, 19990000],
    specs: { 'Diện tích': ['20m²', '30m²', '48m²', '60m²', '80m²'], 'CADR': ['200', '350', '500', '600'], 'Lọc': ['HEPA H13', 'HEPA H14', 'Plasma', 'Ion âm'] },
  },
  'quat-dien': {
    brands: ['Panasonic', 'Dyson', 'Xiaomi', 'Sharp', 'Midea', 'Asia'],
    models: ['F-60XAH', 'AM07', 'Purifier Cool TP07', 'Standing Fan 2 Lite', 'PJ-N40V', 'FS40-21BR', 'A1623'],
    priceRange: [390000, 14990000],
    specs: { 'Loại': ['Quạt đứng', 'Quạt trần', 'Quạt để bàn', 'Quạt tháp'], 'Công suất': ['40W', '50W', '60W', '75W'], 'Tính năng': ['Hẹn giờ', 'Remote', 'Gió tự nhiên', 'Ion âm'] },
  },
  // THIẾT BỊ MẠNG
  'router-wifi': {
    brands: ['TP-Link', 'ASUS', 'Netgear', 'Linksys', 'Xiaomi', 'Tenda'],
    models: ['Archer AXE75', 'Archer AX73', 'Deco XE75', 'Deco X50', 'RT-AX86U Pro', 'ROG Rapture GT-AX6000', 'ZenWiFi XD6S', 'Nighthawk RAX50', 'Orbi RBK852', 'MR7350', 'Mesh AX3000', 'Redmi AX6000', 'Nova Mesh WiFi 6'],
    priceRange: [490000, 12990000],
    specs: { 'Chuẩn': ['WiFi 6', 'WiFi 6E', 'WiFi 7'], 'Tốc độ': ['AX3000', 'AX5400', 'AX6000', 'AXE5400', 'BE9300'], 'Băng tần': ['Dual-band', 'Tri-band'], 'Cổng': ['Gigabit', '2.5G', '10G'] },
  },
  switch: {
    brands: ['TP-Link', 'Netgear', 'Cisco', 'D-Link'],
    models: ['TL-SG1016D', 'TL-SG108', 'TL-SG1024D', 'GS108E', 'GS308', 'CBS250-8T', 'DGS-1100-08V2'],
    priceRange: [290000, 4990000],
    specs: { 'Số cổng': ['5', '8', '16', '24'], 'Tốc độ': ['Gigabit', '2.5G', '10G'], 'Quản lý': ['Unmanaged', 'Smart Managed', 'Managed'] },
  },
  nas: {
    brands: ['Synology', 'QNAP', 'Asustor', 'WD'],
    models: ['DS224+', 'DS423+', 'DS923+', 'DS1522+', 'TS-264', 'TS-464', 'TS-873A', 'Drivestor 4 Pro', 'My Cloud EX2 Ultra'],
    priceRange: [3990000, 25990000],
    specs: { 'Số khay': ['2', '4', '5', '8'], 'CPU': ['Intel Celeron J4125', 'AMD Ryzen R1600', 'Intel Celeron N5105'], 'RAM': ['2GB', '4GB', '8GB'], 'Raid': ['RAID 0/1', 'RAID 0/1/5/6/10'] },
  },
  'access-point': {
    brands: ['Ubiquiti', 'TP-Link', 'Aruba', 'Ruckus'],
    models: ['U6 Pro', 'U6 Enterprise', 'U6 Lite', 'EAP670', 'EAP660 HD', 'EAP245', 'AP-505', 'R550'],
    priceRange: [1290000, 8990000],
    specs: { 'Chuẩn': ['WiFi 6', 'WiFi 6E'], 'Tốc độ': ['AX1800', 'AX3600', 'AX5400', 'AXE4800'], 'PoE': ['Có', 'Không'], 'Lắp đặt': ['Trần', 'Tường', 'Để bàn'] },
  },
  // ĐỒNG HỒ THÔNG MINH
  'apple-watch': {
    brands: ['Apple'],
    models: ['Apple Watch Ultra 2', 'Apple Watch Series 9 45mm', 'Apple Watch Series 9 41mm', 'Apple Watch SE 2023 44mm', 'Apple Watch SE 2023 40mm'],
    priceRange: [5990000, 21990000],
    specs: { 'Màn hình': ['49mm', '45mm', '44mm', '41mm', '40mm'], 'Chất liệu': ['Titanium', 'Nhôm', 'Thép không gỉ'], 'Kết nối': ['GPS', 'GPS + Cellular'], 'Chống nước': ['WR50', 'WR100', '100m lặn'] },
  },
  'galaxy-watch': {
    brands: ['Samsung'],
    models: ['Galaxy Watch Ultra', 'Galaxy Watch7 44mm', 'Galaxy Watch7 40mm', 'Galaxy Watch FE', 'Galaxy Watch6 Classic 47mm'],
    priceRange: [3990000, 15990000],
    specs: { 'Màn hình': ['47mm AMOLED', '44mm AMOLED', '40mm AMOLED'], 'Chip': ['Exynos W1000', 'Exynos W930'], 'Pin': ['1 ngày', '1.5 ngày', '2 ngày'], 'OS': ['Wear OS 5', 'Wear OS 4'] },
  },
  garmin: {
    brands: ['Garmin'],
    models: ['Fenix 8', 'Fenix 7X', 'Epix Gen 2', 'Forerunner 965', 'Forerunner 265', 'Venu 3', 'Instinct 2X Solar'],
    priceRange: [6990000, 24990000],
    specs: { 'Màn hình': ['1.4" AMOLED', '1.3" AMOLED', '1.3" MIP'], 'Pin': ['9 ngày', '14 ngày', '28 ngày', '37 ngày'], 'GPS': ['Multi-band GPS', 'GPS + GLONASS', 'GPS + GLONASS + Galileo'], 'Chống nước': ['5 ATM', '10 ATM'] },
  },
  'xiaomi-watch': {
    brands: ['Xiaomi'],
    models: ['Watch S3', 'Watch 2 Pro', 'Watch 2', 'Band 8 Pro', 'Band 8', 'Redmi Watch 4'],
    priceRange: [690000, 5990000],
    specs: { 'Màn hình': ['1.43" AMOLED', '1.97" AMOLED', '1.62" AMOLED'], 'Pin': ['5 ngày', '12 ngày', '16 ngày', '20 ngày'], 'Kết nối': ['Bluetooth 5.2', 'Bluetooth + WiFi'], 'Chống nước': ['5 ATM', '3 ATM'] },
  },
};

// Seeded random for reproducibility
function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
}

const random = seededRandom(42);

function pick<T>(arr: T[]): T {
  return arr[Math.floor(random() * arr.length)];
}

function pickSpecs(specsTemplate: Record<string, string[]>): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [key, values] of Object.entries(specsTemplate)) {
    result[key] = pick(values);
  }
  return result;
}

function randomPrice(min: number, max: number): number {
  const raw = min + random() * (max - min);
  return Math.round(raw / 10000) * 10000; // Round to nearest 10,000 VND
}

function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

const categoryMap: Record<string, string> = {
  cpu: 'Linh kiện PC', vga: 'Linh kiện PC', ram: 'Linh kiện PC', 'ssd-hdd': 'Linh kiện PC',
  mainboard: 'Linh kiện PC', psu: 'Linh kiện PC', 'case': 'Linh kiện PC', 'tan-nhiet': 'Linh kiện PC',
  'laptop-gaming': 'Laptop', 'laptop-van-phong': 'Laptop', ultrabook: 'Laptop', 'laptop-workstation': 'Laptop',
  iphone: 'Điện thoại', samsung: 'Điện thoại', xiaomi: 'Điện thoại', oppo: 'Điện thoại', vivo: 'Điện thoại',
  'man-hinh-gaming': 'Màn hình', 'man-hinh-4k': 'Màn hình', 'man-hinh-ultrawide': 'Màn hình', 'man-hinh-van-phong': 'Màn hình',
  'chuot-gaming': 'Phụ kiện', 'ban-phim-co': 'Phụ kiện', 'tai-nghe': 'Phụ kiện', webcam: 'Phụ kiện', 'lot-chuot': 'Phụ kiện',
  tv: 'Điện máy', 'loa-bluetooth': 'Điện máy', 'may-loc-khong-khi': 'Điện máy', 'quat-dien': 'Điện máy',
  'router-wifi': 'Thiết bị mạng', switch: 'Thiết bị mạng', nas: 'Thiết bị mạng', 'access-point': 'Thiết bị mạng',
  'apple-watch': 'Đồng hồ thông minh', 'galaxy-watch': 'Đồng hồ thông minh', garmin: 'Đồng hồ thông minh', 'xiaomi-watch': 'Đồng hồ thông minh',
};

function getProductImage(subSlug: string, index: number): string {
  // Use picsum.photos with seed for consistent, always-available images
  const seed = `${subSlug}-${index}`;
  return `https://picsum.photos/seed/${seed}/400/400`;
}

const subcategoryNames: Record<string, string> = {
  cpu: 'CPU - Bộ vi xử lý', vga: 'VGA - Card đồ họa', ram: 'RAM', 'ssd-hdd': 'SSD / HDD',
  mainboard: 'Mainboard', psu: 'PSU - Nguồn máy tính', 'case': 'Case - Vỏ máy tính', 'tan-nhiet': 'Tản nhiệt',
  'laptop-gaming': 'Laptop Gaming', 'laptop-van-phong': 'Laptop Văn phòng', ultrabook: 'Ultrabook', 'laptop-workstation': 'Laptop Workstation',
  iphone: 'iPhone', samsung: 'Samsung', xiaomi: 'Xiaomi', oppo: 'OPPO', vivo: 'Vivo',
  'man-hinh-gaming': 'Màn hình Gaming', 'man-hinh-4k': 'Màn hình 4K', 'man-hinh-ultrawide': 'Màn hình Ultrawide', 'man-hinh-van-phong': 'Màn hình Văn phòng',
  'chuot-gaming': 'Chuột Gaming', 'ban-phim-co': 'Bàn phím cơ', 'tai-nghe': 'Tai nghe', webcam: 'Webcam', 'lot-chuot': 'Lót chuột',
  tv: 'TV - Tivi', 'loa-bluetooth': 'Loa Bluetooth', 'may-loc-khong-khi': 'Máy lọc không khí', 'quat-dien': 'Quạt điện',
  'router-wifi': 'Router Wifi', switch: 'Switch', nas: 'NAS', 'access-point': 'Access Point',
  'apple-watch': 'Apple Watch', 'galaxy-watch': 'Galaxy Watch', garmin: 'Garmin', 'xiaomi-watch': 'Xiaomi Watch',
};

// Target ~1000 products distribution
const targetCounts: Record<string, number> = {
  cpu: 30, vga: 35, ram: 25, 'ssd-hdd': 25, mainboard: 25, psu: 20, 'case': 20, 'tan-nhiet': 20,
  'laptop-gaming': 40, 'laptop-van-phong': 40, ultrabook: 35, 'laptop-workstation': 20,
  iphone: 30, samsung: 30, xiaomi: 30, oppo: 25, vivo: 25,
  'man-hinh-gaming': 30, 'man-hinh-4k': 25, 'man-hinh-ultrawide': 20, 'man-hinh-van-phong': 25,
  'chuot-gaming': 35, 'ban-phim-co': 35, 'tai-nghe': 35, webcam: 20, 'lot-chuot': 20,
  tv: 30, 'loa-bluetooth': 25, 'may-loc-khong-khi': 20, 'quat-dien': 15,
  'router-wifi': 20, switch: 10, nas: 10, 'access-point': 10,
  'apple-watch': 12, 'galaxy-watch': 12, garmin: 12, 'xiaomi-watch': 12,
};

// Generate products
const products: Product[] = [];
let productId = 1;

for (const [subSlug, template] of Object.entries(productTemplates)) {
  const count = targetCounts[subSlug] || 10;
  const usedNames = new Set<string>();

  for (let i = 0; i < count; i++) {
    const brand = pick(template.brands);
    const model = pick(template.models);
    let name = `${brand} ${model}`;
    
    // Ensure unique names by adding suffix
    if (usedNames.has(name)) {
      const suffixes = ['(2026)', 'New', 'V2', 'Edition', 'Rev 2.0', 'Black', 'White', 'Silver'];
      name = `${name} ${pick(suffixes)}`;
    }
    usedNames.add(name);

    const price = randomPrice(template.priceRange[0], template.priceRange[1]);
    const hasDiscount = random() > 0.4;
    const discountPercent = hasDiscount ? Math.floor(random() * 25 + 5) : 0;
    const originalPrice = hasDiscount ? Math.round(price / (1 - discountPercent / 100) / 10000) * 10000 : price;

    const product: Product = {
      id: `prod-${String(productId++).padStart(4, '0')}`,
      name,
      slug: generateSlug(name) + `-${productId}`,
      category: categoryMap[subSlug],
      subcategory: subcategoryNames[subSlug],
      brand,
      price,
      originalPrice,
      discount: discountPercent,
      rating: Math.round((3.5 + random() * 1.5) * 10) / 10,
      reviewCount: Math.floor(random() * 500 + 5),
      stock: random() > 0.1 ? Math.floor(random() * 100 + 1) : 0,
      images: [getProductImage(subSlug, i)],
      thumbnail: getProductImage(subSlug, i),
      description: `${name} - Sản phẩm chính hãng ${brand}, bảo hành 24 tháng. Mua tại CyberGravity với giá tốt nhất, giao hàng nhanh toàn quốc.`,
      specs: pickSpecs(template.specs),
      tags: [brand.toLowerCase(), subSlug, categoryMap[subSlug].toLowerCase()],
      isFeatured: random() > 0.85,
      isNew: random() > 0.7,
      createdAt: new Date(2026, 0, 1 + Math.floor(random() * 75)).toISOString(),
    };
    products.push(product);
  }
}

// Generate reviews
const vietnameseNames = [
  'Nguyễn Văn An', 'Trần Thị Bình', 'Lê Hoàng Cường', 'Phạm Minh Đức', 'Hoàng Thu Hà',
  'Vũ Đình Khoa', 'Đỗ Thị Lan', 'Bùi Quang Minh', 'Ngô Thanh Nga', 'Trịnh Công Phú',
  'Dương Thị Quỳnh', 'Lý Văn Sơn', 'Hồ Ngọc Tâm', 'Phan Anh Tuấn', 'Mai Thị Uyên',
  'Cao Đình Vinh', 'Đinh Thị Xuân', 'Lương Văn Yên', 'Tô Hoài Thanh', 'Nguyễn Thị Hương',
  'Trần Quốc Bảo', 'Lê Thị Cúc', 'Phạm Văn Dũng', 'Hoàng Thị Em', 'Vũ Minh Giang',
  'Đỗ Văn Hải', 'Bùi Thị Ích', 'Ngô Đức Kiên', 'Trịnh Thị Linh', 'Dương Văn Mạnh',
];

const reviewComments = [
  'Sản phẩm rất tốt, đúng mô tả. Ship nhanh!',
  'Chất lượng tuyệt vời, đóng gói cẩn thận. Sẽ mua lại.',
  'Sử dụng rất ổn, hiệu năng tốt. Giá hợp lý.',
  'Đáng đồng tiền bát gạo. Recommend cho mọi người.',
  'Hàng chính hãng, bảo hành tốt. CyberGravity uy tín!',
  'Mình dùng được 2 tuần rồi, rất hài lòng.',
  'Sản phẩm OK, tạm ổn với giá này.',
  'Tốt hơn mong đợi! Build gaming rất mượt.',
  'Giá tốt nhất thị trường, giao hàng nhanh chóng.',
  'Chất lượng 5 sao, đúng như review trên mạng.',
  'Mới mở hộp, nhìn rất đẹp và chắc chắn.',
  'Dùng cho công việc hàng ngày rất tốt.',
  'So với giá tiền thì quá xuất sắc!',
  'Mua làm quà tặng, người nhận rất thích.',
  'Thiết kế đẹp, hoạt động êm, không có gì phàn nàn.',
  'Đã mua lần 2, vẫn rất hài lòng.',
  'Phục vụ nhiệt tình, sản phẩm chất lượng.',
  'Nâng cấp từ đời cũ lên, khác biệt rõ rệt!',
  'Ship hơi chậm nhưng hàng tốt. 4 sao.',
  'Tương xứng với tầm giá, không có gì để chê.',
];

const reviews: Review[] = [];
let reviewId = 1;

for (const product of products) {
  const numReviews = Math.floor(random() * 5 + 1);
  for (let j = 0; j < numReviews; j++) {
    reviews.push({
      id: `review-${String(reviewId++).padStart(5, '0')}`,
      productId: product.id,
      userName: pick(vietnameseNames),
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${reviewId}`,
      rating: Math.floor(random() * 2 + 4), // 4-5 stars mostly
      comment: pick(reviewComments),
      createdAt: new Date(2026, 0, 1 + Math.floor(random() * 75)).toISOString(),
    });
  }
}

export { products, reviews };
export default products;
