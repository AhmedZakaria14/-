# Analytics Setup Guide for Nashar Hub

## 1. Google Tag Manager (GTM) Setup
1.  Go to [tagmanager.google.com](https://tagmanager.google.com).
2.  Create a new account for "Nashar Hub".
3.  Create a container for "Web".
4.  Copy your Container ID (e.g., `GTM-XXXXXXX`).
5.  **Action:** Replace `GTM-XXXXXXX` in `index.html` with your actual ID.

## 2. Triggers Configuration
Create the following **Custom Event** triggers in GTM:

| Trigger Name | Event Name |
| :--- | :--- |
| Event - Generate Lead | `generate_lead` |
| Event - Use Tool | `use_tool` |
| Event - Contact Click | `contact_click` |

## 3. Variables Configuration
Enable the following **Data Layer Variables**:

| Variable Name | Data Layer Variable Name |
| :--- | :--- |
| DLV - Method | `method` |
| DLV - Location | `location` |
| DLV - Tool Name | `tool_name` |
| DLV - Result Value | `result_value` |

## 4. Tags Configuration (GA4)
Create **GA4 Event** tags for each trigger:

### Tag 1: Generate Lead
*   **Event Name:** `generate_lead`
*   **Event Parameters:**
    *   `method`: `{{DLV - Method}}`
    *   `location`: `{{DLV - Location}}`
*   **Trigger:** `Event - Generate Lead`

### Tag 2: Use Tool (ROI Calculator)
*   **Event Name:** `use_tool`
*   **Event Parameters:**
    *   `tool_name`: `{{DLV - Tool Name}}`
    *   `value`: `{{DLV - Result Value}}`
*   **Trigger:** `Event - Use Tool`

## 5. Pixel Setup (Snapchat & TikTok)
1.  Create a **Custom HTML** tag in GTM.
2.  Paste your Pixel Base Code.
3.  Set Trigger to "All Pages".
4.  Create another Custom HTML tag for the event:
    ```html
    <script>
      snaptr('track', 'SIGN_UP', {
        'method': '{{DLV - Method}}'
      });
    </script>
    ```
5.  Set Trigger to `Event - Generate Lead`.
