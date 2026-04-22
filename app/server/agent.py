
import asyncio
from dotenv import load_dotenv
import os
import sys
from browser_use import Browser, Agent, ChatGoogle

async def main():
    load_dotenv()

    browser = Browser(headless=False, keep_alive=False)

    llm = ChatGoogle(
        model="gemini-flash-latest",
        api_key=os.getenv("GEMINI_API_KEY")
    )

    # Get the task from the command line argument
    if len(sys.argv) > 1:
        task = sys.argv[1]
    else:
        raise ValueError("No task argument provided. Usage: agent.py <task>")

    agent = Agent(
        task=task,
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