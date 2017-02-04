from channels.routing import route
from CVT.CVTConfig import *

channel_routing = [
    route("websocket.connect", modules['add']),
    route("websocket.receive", modules['message']),
    route("websocket.disconnect", modules['disconnect']),
]