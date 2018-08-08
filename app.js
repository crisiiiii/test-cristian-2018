angular
  .module('app', [])
  .service('DataService', function() {
    let sequence = 1;
    const data = [];
    const byId = (id)  => (row) => row[0] === id;
    const get  = (id)  => data[data.findIndex(byId(id))]; 
    const post = (row) => data.push(row.unshift(sequence++) && row);
    const del  = (id)  => data.splice(data.findIndex(byId(id)), 1);
    const put  = (id, row) => data[data.findIndex(byId(id))] = row;

    post(['2017-08-19T10:05:09.481Z', 'Zosimus Theophilos',   'Andabata',    32, 11]);
    post(['2016-06-03T22:59:41.518Z', 'Lucianus Januarius',   'Arbelas',     14,  2]);
    post(['2015-10-16T22:46:41.554Z', 'Servius Glaucia',      'Bestiarius',  69, 13]);
    post(['2015-07-27T07:14:33.687Z', 'Blandinus Ianuarius',  'Bustuarius',   9,  9]);
    post(['2016-10-24T22:17:03.687Z', 'Vibius Maximinus',     'Cestus',      56, 32]);
    post(['2017-01-16T20:01:31.258Z', 'Paulus Traianus',      'Crupellarii', 49, 23]);
    post(['2016-04-07T10:02:43.622Z', 'Faustinus Herminius',  'Dimachaerus', 27, 18]);
    post(['2015-08-06T16:44:27.432Z', 'Crispinus Avilius',    'Equites',     19, 12]);
    post(['2015-04-02T21:11:26.125Z', 'Antoninus Caius',      'Essedarius',  22,  5]);
    post(['2015-07-22T23:18:29.474Z', 'Aurelius Quintus',     'Retiarius',   63,  0]);
    post(['2016-03-09T01:34:25.695Z', 'Nonus Severianus',     'Murmillo',    41, 15]);
    post(['2014-11-05T09:46:10.528Z', 'Septimius Longinus',   'Secutor',     39,  8]);
    post(['2016-01-03T01:39:00.731Z', 'Blasius Cassius',      'Thraex',      54, 24]);
    post(['2017-02-02T01:26:05.832Z', 'Septimus Marius',      'Velites',     61, 19]);
    post(['2017-03-27T17:19:04.605Z', 'Antonius Quintinus',   'Hoplomachus', 33, 28]);
    post(['2017-06-20T17:07:24.680Z', 'Atilius Tullius',      'Gladiatrix',   2,  1]);
    post(['2016-11-12T19:42:50.305Z', 'Priscus Julius',       'Bestiarius',  18,  5]);
    post(['2016-04-17T05:51:46.446Z', 'Aurelianus Iuvenalis', 'Scutarius',   22, 14]);
    post(['2016-09-30T17:23:36.590Z', 'Iovita Cyprianus',     'Retiarius',   43, 11]);
    post(['2017-01-31T22:18:19.993Z', 'Brutus Manius',        'Provocator',  16,  8]);
    post(['2017-02-15T07:27:43.262Z', 'Fulvius Junius',       'Equites',     78, 11]);

    const service = { data, get, post, put, del };
    window.__service = service;

    return service;
  })
  .service('HdrService', function() {
    return [
      'Id', 'Last event', 'Name', 'Role', 'Wins', 'Losses'
    ];
  })
  .controller('AppCtrl', function($scope, DataService, HdrService) {
    // Scope data
    $scope.hdrs = HdrService;
    $scope.data = DataService.data;
    // Ordering
    $scope.orderHdr = 'Id';
    $scope.getByHdr    = (row) => row[$scope.hdrs.indexOf($scope.orderHdr)];
    $scope.setOrderHdr = (hdr) => $scope.orderHdr = hdr;
    
    window.__apply = $scope.$apply.bind($scope);
  });
