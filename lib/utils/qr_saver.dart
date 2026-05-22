export 'qr_saver_stub.dart'
  if (dart.library.html) 'qr_saver_web.dart'
  if (dart.library.io) 'qr_saver_mobile.dart';
