<script lang="ts">
    let name: HTMLInputElement, email: HTMLInputElement, message: HTMLTextAreaElement
    let disabled: boolean = false

    const handleForm = () => {
        setTimeout(() => {
            disabled = (name.value.length > 0 && email.value.length > 0 && message.value.length > 0)
        }, 100)
    }
</script>

<form class="flex flex-col gap-3">
    <div class="grid grid-cols-2 gap-4">
        <div>
            <label
                for="name" 
                class="
                    block mb-1 
                    font-bold text-xs uppercase
                    
                    after:content-['*']
                    after:ml-0.5 
                    after:text-red after:text-xs">
                    name
            </label>
            <input bind:this={name} on:keydown={handleForm} class="border-2 w-full p-2 cursor-text rounded-md border-navy-light" name="name" type="text" placeholder="John Smith" required />
        </div>
        <div>
            <label
                for="email" 
                class="
                    block mb-1 
                    font-bold text-xs uppercase
                    
                    after:content-['*']
                    after:ml-0.5 
                    after:text-red after:text-xs">
                    email
            </label>
            <input bind:this={email} on:keydown={handleForm} class="border-2 w-full p-2 cursor-text rounded-md border-navy-light" name="email" type="email" placeholder="jsmith@example.com" required />
        </div>
    </div>
    <div>
        <label
            for="subject"
            class="
                block mb-1 
                font-bold text-xs uppercase">
                subject
        </label>
        <input class="border-2 w-full p-2 cursor-text rounded-md border-navy-light" name="subject" type="text" />
    </div>
    <div>
        <label
            for="message" 
            class="
                block mb-1 
                font-bold text-xs uppercase
                
                after:content-['*']
                after:ml-0.5 
                after:text-red after:text-xs">
            message
        </label>
        <textarea bind:this={message} on:keydown={handleForm} class="border-2 w-full p-2 cursor-text rounded-md border-navy-light" name="message" rows="5" required></textarea>
    </div>
    <button class="bg-navy disabled:bg-navy-light text-white p-2 rounded-md" type="submit">Send</button>
</form>