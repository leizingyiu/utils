import sys
import json
import os
import re

source_path = os.path.abspath(os.path.join(os.path.abspath(__file__), '..'))
target_path = os.path.abspath(os.path.join(source_path, '../utils'))
target_path2 = os.path.abspath(os.path.join(source_path, '.export'))

re_ignore = re.compile(r'(/\.)|(backup)|(history)')

if(os.path.exists(target_path) == False):
    target_path = target_path2

print(source_path, os.path.abspath(source_path))
print(target_path, os.path.abspath(target_path))

copy_command = ''

print(sys.platform)
if sys.platform.startswith('win32'):
    copy_command = 'copy'
elif sys.platform.startswith('darwin'):
    copy_command = 'cp'


for filepath, dirnames, filenames in os.walk(source_path):
    for filename in filenames:
        source_file_path = os.path.join(filepath, filename)
        if(re_ignore.search(source_file_path) == None):

            target_file_path = source_file_path.replace(
                source_path, target_path)

            s_path = os.path.abspath(source_file_path)
            t_path = os.path.abspath(target_file_path)

            if not os.path.exists(os.path.dirname(t_path)):
                os.makedirs(os.path.dirname(t_path))
            this_copy_command = copy_command+' "'+s_path+'" "'+t_path+'"'
            print(this_copy_command)
            os.system(this_copy_command)


for f in os.listdir(source_path):
    if(re.compile(r'(/\.)|(backup)').search(f) == None and os.path.isdir(f) == False):
        source_file_path = os.path.join(source_path, f)
        if(re_ignore.search(source_file_path) == None):

            target_file_path = source_file_path.replace(
                source_path, target_path)

            s_path = os.path.abspath(source_file_path)
            t_path = os.path.abspath(target_file_path)
            this_copy_command = copy_command+' "'+s_path+'" "'+t_path+'"'
            print(this_copy_command)
            os.system(this_copy_command)
