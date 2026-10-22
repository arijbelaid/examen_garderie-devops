# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  # 1. Système : Ubuntu Server (22.04 LTS)
  config.vm.box = "ubuntu/jammy64"

  # 2. Réseau privé avec une adresse IP fixe
  config.vm.network "private_network", ip: "192.168.56.10"

  # 3. Configuration des ressources (VirtualBox)
  config.vm.provider "virtualbox" do |vb|
    vb.name = "vm-garderie-devops"
    # Mémoire RAM : 2 Go minimum
    vb.memory = "2048"
    # CPU : 2 vCPU
    vb.cpus = 2
  end

  # 4. Configuration de Vagrant pour exécuter Ansible (Question 22)
  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "ansible/site.yml"
  end
end
