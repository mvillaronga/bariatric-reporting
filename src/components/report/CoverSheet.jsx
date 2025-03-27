import React from 'react';

export default function CoverSheet() {
    return (
        <div>
          <h1>Gemini Bariatric</h1>
          <div class="contact-info">
              <strong>Timothy V. Coy, Ph.D.</strong><br />
              Clinical Psychologist<br />
              33530 First Way S #102, Federal Way, WA 98003<br />
              Phone: 206.931.3793<br />
              Fax: 206.666.4240
          </div>

          <h2>Facsimile Cover Sheet</h2>
          <div>Date: 03/17/2025</div>
          <div>Total Pages: 5</div>

          <div class="subject">
              <strong>Subject:</strong> <span id="subjectName">Mary Doe</span>; DOB: <span id="subjectDOB">04/08/1981</span><br />
              Presurgical Psychological Evaluation Report
          </div>

          <div class="message">
              <strong>To:</strong> Virginia Mason Franciscan Center for Weight Management<br />
              <strong>Fax:</strong> 253-944-2093<br />
              <p>To Whom It May Concern – please feel free to contact me regarding the attached report should you have any questions. I appreciate the referral.</p>
              <p>Regards,<br />
              Timothy Coy, Ph.D., Clinical Psychologist</p>
          </div>
        </div>
    );
}
