FROM fedora:31

RUN dnf install -y npm\
 && npm install --global yarn\
 && rm -rf /var/cache/dnf/
