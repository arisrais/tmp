/**
 * Created by rais on 20/11/16.
 */

QUnit.test('word-count #text-sample-1', function( assert ) {
    var sample1 = $("#text-sample-1").evaneos();
    assert.equal(sample1['costa'], 1, "We expected 1 occurence of 'costa'");
    assert.equal(sample1['rica'], 1, "We expected 1 occurence of 'rica'");
    assert.equal(sample1['découvrez'], 1, "We expected 1 occurence of 'découvrez'");
    assert.equal(sample1['joyaux'], 1, "We expected 1 occurence of 'joyaux'");
    assert.equal(sample1['écologique'], 1, "We expected 1 occurence of 'écologique'");
    assert.equal(sample1['amérique'], 1, "We expected 1 occurence of 'amérique'");
    assert.equal(sample1['centrale'], 1, "We expected 1 occurence of 'centrale'");
    assert.equal(Object.keys(sample1).length, 7, "We expected 7 different words");
});

QUnit.test('word-count #text-sample-2', function( assert ) {
    var sample2 = $("#text-sample-2").evaneos();
    assert.equal(Object.keys(sample2).length, 0, "We expected an empty table");
});

QUnit.test('word-count #text-sample-3', function( assert ) {
    var sample3 = $("#text-sample-3").evaneos();
    assert.equal(sample3['costa'], 1, "We expected 1 occurence of 'costa'");
    assert.equal(sample3['rica'], 1, "We expected 1 occurence of 'rica'");
    assert.equal(sample3['découvrez'], 1, "We expected 1 occurence of 'découvrez'");
    assert.equal(sample3['joyaux'], 1, "We expected 1 occurence of 'joyaux'");
    assert.equal(sample3['écologique'], 1, "We expected 1 occurence of 'écologique'");
    assert.equal(sample3['amérique'], 1, "We expected 1 occurence of 'amérique'");
    assert.equal(sample3['centrale'], 1, "We expected 1 occurence of 'centrale'");
    assert.equal(Object.keys(sample3).length, 7, "We expected 7 different words");
});

QUnit.test('word-count #text-sample-4', function( assert ) {
    var sample4 = $("#text-sample-4").evaneos();
    assert.equal(sample4['arménie'], 1, "We expected 1 occurence of 'arménie'");
    assert.equal(sample4['venez'], 1, "We expected 1 occurence of 'venez'");
    assert.equal(sample4['rencontrer'], 1, "We expected 1 occurence of 'rencontrer'");
    assert.equal(sample4['notre'], 1, "We expected 1 occurence of 'notre'");
    assert.equal(sample4['agent'], 1, "We expected 1 occurence of 'agent'");
    assert.equal(sample4['local'], 1, "We expected 1 occurence of 'local'");
    assert.equal(sample4['paris'], 1, "We expected 1 occurence of 'Paris'");
    assert.equal(sample4['dec'], 1, "We expected 1 occurence of 'dec'");
    assert.equal(Object.keys(sample4).length, 8, "We expected 8 different words");
});

QUnit.test('word-count #text-sample-5', function( assert ) {
    var sample5 = $("#text-sample-5").evaneos();
    assert.equal(sample5['hello'], 2, "We expected 2 occurence of 'hello'");
    assert.equal(sample5['hamouda'], 1, "We expected 1 occurence of 'hamouda'");
    assert.equal(sample5['evaneos'], 1, "We expected 1 occurence of 'evaneos'");
    assert.equal(Object.keys(sample5).length, 3, "We expected 3 different words");
});

QUnit.test('word-count #text-sample-6', function( assert ) {
    var sample6 = $("#text-sample-6").evaneos();
    assert.equal(sample6['hel'], 1, "We expected 1 occurence of 'hel'");
    assert.equal(sample6['hamouda'], 1, "We expected 1 occurence of 'hamouda'");
    assert.equal(sample6['hello'], 1, "We expected 1 occurence of 'hello'");
    assert.equal(Object.keys(sample6).length, 3, "We expected 3 different words");
});

QUnit.test('word-count #text-sample-7', function( assert ) {
    var sample7 = $("#text-sample-7").evaneos();
    assert.equal(sample7['hello'], 2, "We expected 2 occurence of 'hello'");
    assert.equal(sample7['hamouda'], 1, "We expected 1 occurence of 'hamouda'");
    assert.equal(Object.keys(sample7).length, 2, "We expected 3 different words");
});

QUnit.test('word-count #text-sample-8', function( assert ) {
    var sample8 = $("#text-sample-8").evaneos();
    assert.equal(sample8['voyage'], 2, "We expected 2 occurence of 'voyage'");
    assert.equal(Object.keys(sample8).length, 1, "We expected 1 different words");
});

QUnit.test('word-count #text-sample-9', function( assert ) {
    var sample9 = $("#text-sample-9").evaneos();
    assert.equal(sample9['voyage'], 2, "We expected 2 occurence of 'voyage'");
    assert.equal(sample9['arc-en-ciel'], 1, "We expected 1 occurence of 'arc-en-ciel'");
    assert.equal(Object.keys(sample9).length, 2, "We expected 2 different words");
});

QUnit.test('word-count #text-sample-10', function( assert ) {
    var sample10 = $("#text-sample-10").evaneos();
    assert.equal(sample10['voyage'], 1, "We expected 1 occurence of 'voyage'");
    assert.equal(sample10['arc-en-ciel'], 1, "We expected 1 occurence of 'arc-en-ciel'");
    assert.equal(sample10['timbre-poste'], 1, "We expected 1 occurence of 'timbre-poste'");
    assert.equal(sample10['poste'], 1, "We expected 1 occurence of 'poste'");
    assert.equal(sample10['ciel'], 1, "We expected 1 occurence of 'ciel'");
    assert.equal(Object.keys(sample10).length, 5, "We expected 5 different words");
});

QUnit.test('word-count #text-sample-11', function( assert ) {
    var sample11 = $("#text-sample-11").evaneos();
    assert.equal(sample11['bonjour_de'], 1, "We expected 1 occurence of 'Bonjour_de'");
    assert.equal(sample11['paris_paris'], 1, "We expected 1 occurence of 'paris_paris'");
    assert.equal(Object.keys(sample11).length, 2, "We expected 2 different words");
});

QUnit.test('word-count #text-sample-12', function( assert ) {
    var sample12 = $("#text-sample-12").evaneos();
    assert.equal(sample12['inde'], 1, "We expected 1 occurence of 'inde'");
    assert.equal(sample12['indien'], 1, "We expected 1 occurence of 'indien'");
    assert.equal(Object.keys(sample12).length, 2, "We expected 2 different words");
});

QUnit.test('word-count #text-sample-13', function( assert ) {
    var sample13 = $("#text-sample-13").evaneos();
    assert.equal(sample13['paris-paris'], 1, "We expected 1 occurence of 'paris-paris'");
    assert.equal(Object.keys(sample13).length, 1, "We expected 1 different words");
});

QUnit.test('word-count #text-sample-14', function( assert ) {
    var sample14 = $("#text-sample-14").evaneos();
    assert.equal(sample14['tendances'], 1, "We expected 1 occurence of 'tendances'");
    assert.equal(sample14['mode'], 1, "We expected 1 occurence of 'mode'");
    assert.equal(sample14['h&m'], 1, "We expected 1 occurence of 'H&M'");
    assert.equal(Object.keys(sample14).length, 3, "We expected 3 different words");
});

QUnit.test('word-count #text-sample-15', function( assert ) {
    var sample15 = $("#text-sample-15").evaneos();
    assert.equal(sample15['paragraphe'], 2, "We expected 2 occurence of 'paragraphe'");
    assert.equal(sample15['suite'], 1, "We expected 1 occurence of 'Suite'");
    assert.equal(Object.keys(sample15).length, 2, "We expected 2 different words");
});

QUnit.test('word-count #text-sample-16', function( assert ) {
    var sample16 = $("#text-sample-16").evaneos();
    assert.equal(sample16['h&m'], 2, "We expected 2 occurence of 'h&m'");
    assert.equal(sample16['vend'], 1, "We expected 1 occurence of 'vend'");
    assert.equal(sample16['des'], 1, "We expected 1 occurence of 'des'");
    assert.equal(sample16['t-shirts'], 1, "We expected 1 occurence of 't-shirts'");
    assert.equal(Object.keys(sample16).length, 4, "We expected 4 different words");
});
