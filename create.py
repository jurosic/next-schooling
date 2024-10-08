def makefiles():
    l = ['addpost', 'search', 'notifications', 'gdpr', 'about-me']

    import os

    for path in l:
        os.mkdir(f"./{path}")
        f = open(f'./{path}/page.tsx', "w+")
        f.write("""
    // src/app/"""+path+"""/page.tsx

    import * as React from 'react';
    import Typography from '@mui/material/Typography';
    import Container from '@mui/material/Container'

    export default function ComboBox() {
    return (
            <Container>
                <Typography>""" +path+ """</Typography>
            </Container>
        );
    }
        
        """)


def recurse_labelfiles(path, depth):
    import os

    for file in os.listdir(path):
        #print("   "*depth + file)
        if os.path.isdir(path+"/"+file):
            recurse_labelfiles(path+"/"+file, depth+1)

        if file.endswith(".tsx"):
            print("tsx FILE")

            file = open(path+"/"+file, "r").read()

            if file[:2] == "//":
                print("Alr got comment")
            else:
                file = f"//{path+"/"+file}\n" + file

                print(file)


recurse_labelfiles(".", 0)