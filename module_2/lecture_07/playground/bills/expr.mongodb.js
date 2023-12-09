use("skillslash");

db.getCollection("bills").find({
    "$expr": {
        "$gt": [
            "$spent",
            "$budget"
        ]
    }
});