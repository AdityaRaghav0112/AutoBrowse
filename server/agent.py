
import asyncio
from dotenv import load_dotenv
import os
from browser_use import Browser, Agent, ChatGoogle

async def main():
    load_dotenv()

    browser = Browser(headless=False, keep_alive=False)

    llm = ChatGoogle(
        model="gemini-flash-latest",
        api_key=os.getenv("GEMINI_API_KEY")
    )

    agent = Agent(
        task=(
            "Step 1: Go to https://www.amazon.in/ "
            "Step 2: Search for Nike Shoes "
            "Step 3: Open the first product and look for the price. "
            "After that stop the task."
        ),
        llm=llm,
        browser=browser
    )


    result = await agent.run()
    print("Agent result:", result)

    browser_session = agent.browser_session
    page = await browser_session.get_current_page()

    if page is None:
        print("No page found.")
        return

    # Extract the page title and URL as a sanity check
    

    await browser.stop()

asyncio.run(main())