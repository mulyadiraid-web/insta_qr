# Insta QRIS - Premium Payment & QRIS Management App 🚀

A sleek, modern, and premium mobile application designed for generating, scanning, and managing QRIS payments. Crafted with a futuristic Gen Z-inspired design language featuring space gradients, neon accents, glassmorphism, and smooth micro-animations.

![Premium Design](https://img.shields.io/badge/Design-Premium-blueviolet?style=for-the-badge)
![Flutter](https://img.shields.io/badge/Flutter-v3.22+-02569B?style=for-the-badge&logo=flutter&logoColor=white)

## ✨ Features

- **Dashboard Keuangan**: Track overall balance, income analytics, and access quick actions.
- **Dynamic QRIS Generator**: Input merchant name, transaction details, and nominal amounts to instantly generate a custom payment QRIS code.
- **Integrated QR Scanner**: Fast, real-time camera scanning capabilities using `mobile_scanner` to process payment information.
- **Transaction History**: Comprehensive logs of all payment events and scans, complete with status tracking (Success, Pending, Failed).
- **Premium Dark Theme**: Visually stunning aesthetic utilizing space-themed dark gradients, neon highlights, and typography powered by Outfit Google Fonts.
- **Cross-Platform Save & Share**: Easily download QR codes to local storage or share them directly through the native share sheets.

## 🛠️ Project Structure

```text
lib/
├── pages/              # Screen views
│   ├── dashboard_page.dart
│   ├── qris_generator_page.dart
│   ├── qris_scanner_page.dart
│   └── transaction_history_page.dart
├── widgets/            # Reusable UI components
│   ├── custom_button.dart
│   ├── custom_card.dart
│   ├── input_field.dart
│   ├── qr_display.dart
│   └── transaction_tile.dart
├── utils/              # Utilities and styling helpers
│   ├── app_colors.dart
│   ├── qris_parser.dart
│   └── qr_saver.dart
└── main.dart           # Application entry point
```

## 📦 Dependencies

- [qr_flutter](https://pub.dev/packages/qr_flutter) - QR Code generation.
- [mobile_scanner](https://pub.dev/packages/mobile_scanner) - Fast camera scanning.
- [google_fonts](https://pub.dev/packages/google_fonts) - Premium typography.
- [animate_do](https://pub.dev/packages/animate_do) - Fluid micro-animations.
- [screenshot](https://pub.dev/packages/screenshot) - Screen capturing for QR codes.
- [share_plus](https://pub.dev/packages/share_plus) - Native sharing utility.
- [font_awesome_flutter](https://pub.dev/packages/font_awesome_flutter) - Modern icons.
- [intl](https://pub.dev/packages/intl) - Formatting helpers.

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/insta_qris.git
   ```
2. **Install dependencies**:
   ```bash
   flutter pub get
   ```
3. **Run the app**:
   ```bash
   flutter run
   ```

---

Developed with ❤️ by [Raid Mulyadi]
