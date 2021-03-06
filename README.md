Neos CMS on Platform.sh
=====

This is the offical example for running Neos CMS version 3.1 on platform.sh.

This distribution use PHP 7.1, PostgreSQL 9.6 and Redis 3.0.

Refer to [neos.io](https://neos.io/) for information on Neos CMS.

This example is maintained by ttree agency [ttree ltd - neos solution provider](http://ttree.ch).

How to deploy on Platform.sh
----------------------------

    git remote add platform your-user@git.eu.platform.sh:your-user.git
    git push -u platform master
    
Then you can visit your site, you should see the Neos CMS demo site. 

To access the backend your can add, with the username ```admin``` and the password ```changeme```:

  - /neos (for the current Ember.js Backend)
  - /neos! (for a preview on the React.js Backend)

Check ```.platform.app.yaml```, you can remove ```php flow platform:setup``` after the first deployment. This
CLI helper is just used to import the demo site and create the admin account.

Acknowledgments
---------------

Development sponsored by [ttree ltd - neos solution provider](http://ttree.ch).

We try our best to craft this distribution with a lots of love, we are open to
sponsoring, support request, ... just contact us.

License
-------

Licensed under GPL-3.0+
