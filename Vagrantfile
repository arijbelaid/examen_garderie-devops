# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  # Utilisation d'une box Ubuntu Server (Jammy Jellyfish 22.04 LTS)
  config.vm.box = "ubuntu/jammy64"

  # Configuration du réseau privé avec une IP fixe
  config.vm.network "private_network", ip: "192.168.56.10"

  # Configuration des ressources de la VM
  config.vm.provider "virtualbox" do |vb|
    # Nom de la VM dans VirtualBox (optionnel)
    vb.name = "vm-garderie-devops"
    
    # Mémoire RAM : 2 Go minimum
    vb.memory = "2048"
    
    # CPU : 2 vCPU
    vb.cpus = 2
  end

  # Si vous utilisez VMware au lieu de VirtualBox, décommentez ceci :
  # config.vm.provider "vmware_desktop" do |v|
  #   v.vmx["memsize"] = "2048"
  #   v.vmx["numvcpus"] = "2"
  # end
 # --- AJOUTEZ CE BLOC ICI (Question 22) ---
  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "ansible/site.yml"
    # Optionnel : on précise le dossier d'inventaire si besoin
    # ansible.inventory_path = "ansible/inventory.ini"
end
