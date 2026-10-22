# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  # 1. Système : Ubuntu Server (22.04 LTS)
  config.vm.box = "ubuntu/jammy64"

<<<<<<< Updated upstream
  # Configuration du réseau privé avec une IP fixe
  config.vm.network "private_network", ip: "192.168.159.41"
=======
  # 2. Réseau privé avec une adresse IP fixe
  config.vm.network "private_network", ip: "192.168.56.10"
>>>>>>> Stashed changes

  # 3. Configuration des ressources (VirtualBox)
  #config.vm.provider "virtualbox" do |vb|
   # vb.name = "vm-garderie-devops"
    # Mémoire RAM : 2 Go minimum
    #vb.memory = "2048"
    # CPU : 2 vCPU
<<<<<<< Updated upstream
    vb.cpus = 2
  end

  # Si vous utilisez VMware au lieu de VirtualBox, décommentez ceci :
  # config.vm.provider "vmware_desktop" do |v|
  #   v.vmx["memsize"] = "2048"
  #   v.vmx["numvcpus"] = "2"
  # end
=======
    #vb.cpus = 2
  #end
>>>>>>> Stashed changes
end
