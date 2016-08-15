from django.test import Client, TestCase

# Create your tests here.


# Acceptance tests.
class FibonacciTestCase(TestCase):

    def test_index(self):
        c = Client()
        response = c.get('/')
        self.assertEqual(response.status_code, 200)
