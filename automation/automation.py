from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

# Set up the webdriver (you need to have the chromedriver executable in your PATH)
driver = webdriver.Chrome()

# Open LinkedIn
driver.get("https://www.linkedin.com/")

# Log in
email_input = driver.find_element_by_name("session_key")
password_input = driver.find_element_by_name("session_password")
login_button = driver.find_element_by_class_name("sign-in-form__submit-button")

email_input.send_keys("your_email@example.com")
password_input.send_keys("your_password")
login_button.click()

time.sleep(2)

# Search for jobs
search_input = driver.find_element_by_class_name("search-global-typeahead__input")
search_input.send_keys("Full Stack Developer MERN")
search_input.send_keys(Keys.RETURN)

# Wait for results to load (you might need to adjust the time depending on your internet speed)
time.sleep(5)

# You can now navigate through the job listings and perform actions (e.g., click, apply, etc.) if you want.
