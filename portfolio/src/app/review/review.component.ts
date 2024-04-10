import { Component } from '@angular/core';
import * as nodemailer from 'nodemailer';
import { Feedback } from './feedback.model';
import { FeedbackserviceService } from './feedbackservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {

  ngOnInit(): void {

  }

  feedback: Feedback = new Feedback('', '', '');
  buttonText: string = "Submit Feedback";
  constructor(private feedbackService: FeedbackserviceService, private toastr: ToastrService) { }

  submitFeedback() {
    this.feedbackService.submitFeedback(this.feedback)
      .subscribe(
        () => {
          console.log('Feedback submitted successfully');
          // Optionally, reset the form after submission
          this.feedback = new Feedback('', '', '');
          this.buttonText = "Submited..";
          this.toastr.success("Submitted successfully", "success", {
            timeOut: 3000
          });
          setTimeout(() => 2000);
          this.buttonText="Submit Feedback"
          window.alert("Feedback submitted.")
        },
        error => {
          console.error('Error submitting feedback:', error);
          // Log the error details
          console.log('Error status:', error.status);
          console.log('Error message:', error.message);
          console.log('Error body:', error.error);
          this.toastr.error("Error submitting feedback.");
          window.alert("Error submitting feed back " + error.message);
        }
      );
    this.buttonText = "Submiting..";
  }

}
