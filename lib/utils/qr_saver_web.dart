import 'dart:html' as html;
import 'dart:typed_data';
import 'package:flutter/material.dart';

Future<void> saveQRCode(Uint8List bytes, String fileName, dynamic context) async {
  try {
    final blob = html.Blob([bytes]);
    final url = html.Url.createObjectUrlFromBlob(blob);
    final anchor = html.AnchorElement(href: url)
      ..setAttribute("download", fileName)
      ..click();
    html.Url.revokeObjectUrl(url);

    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('QR Code downloaded successfully')),
    );
  } catch (e) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('Error downloading: $e')),
    );
  }
}
