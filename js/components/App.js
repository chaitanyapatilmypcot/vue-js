import AppButton from "./AppButton.js";
import Assignments from "./Assignments.js";
import Panel from "./Panel.js";

export default
    {
        template: `
        <div class="grid gap-6">
            <assignments></assignments>


            <panel>
                <template v-slot:heading>
                    Hi  there
                </template>
                
                <template v-slot:default>
                    This is my content
                </template>
            </panel>

            <panel>
                <template v-slot:heading>

                    Hi  there

                </template>

                    This is my content
            </panel>

            <panel>
                <template v-slot:heading>
                
                    Hi  there


                </template>

                    This is my content

                <template v-slot:footer>

                    click here to learn more.

                </template>
            </panel>

            <panel theme='light'>
                <template v-slot:heading>
                
                    Hi  there


                </template>

                    This is my content

                <template v-slot:footer>

                    click here to learn more.

                </template>
            </panel>
        </div>
            `,

        components:
        {
            // 'app-button': AppButton
            'assignments': Assignments,
            'panel' : Panel
        }
    };