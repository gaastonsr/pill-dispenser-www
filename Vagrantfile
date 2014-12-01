Vagrant.configure('2') do |config|

    config.vm.box = 'ubuntu/trusty64'
    config.vm.hostname = 'server'

    config.vm.network 'forwarded_port', guest: 8000, host: 8000
    config.vm.provision 'shell', path: "provision/main.sh"

end
