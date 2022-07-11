<script>

export default {
  data: () => ({
    recordings: [],
    showModal: false,
    camera: '',
    mic: '',
    screen: '',
    errorMsg: '',
    cameraState: false,
    micState: false,
    screenState: false
  }),
  beforeMount() {
    let dataUrl = 'json/recordings.json';

    fetch(dataUrl,{
			method: "GET"
		})
    .then(response => {
      if(response.ok){
					return response.json();
				}
    })
    .then(response => {
      this.recordings = response;
      console.log(response);
    })
    .then(
      err => { console.log(err); }
    );

  },
  methods: {
    startRecording() {
      if(this.camera == '' && this.mic == '' && this.screen == '') {
        this.errorMsg = 'Select one or more media device(s) to record!';
        document.getElementById("error").style.display = 'block';
        return;
      }
      document.getElementById("error").style.display = 'none';

      if(this.camera) {
        this.cameraState = true;
      }

      if(this.screen) {
        this.screenState = true;
      }

      if(this.mic) {
        this.micState = true;
      }
      if(this.micState || this.cameraState) {
        this.getStream();
        document.getElementById("content-area").style.display = 'none';
      }
      
      if(this.screenState) {
        this.startScreenCapture();
        document.getElementById("content-area").style.display = 'none';
      }
      
    },
    getStream() {
      let constraints = { video: this.cameraState, audio: this.micState };

      return navigator.mediaDevices.getUserMedia(constraints)
      .then(stream => video.srcObject = stream)
      .catch(e => console.error(e));
    },
    startScreenCapture() {
      let displayMediaOptions = { video: true, audio: true };

      return navigator.mediaDevices.getDisplayMedia(displayMediaOptions)
      .catch(err => { console.error("Error:" + err); return null; });
    },
    closeForm() {
      this.showModal = false;
      this.cameraState = false;
      this.micState = false;
      this.screenState = false;
      this.camera = '';
      this.mic = '';
      this.screen = '';
      this.errorMsg = '';
    }
  }
}
</script>

<template>
    <div class="bd-cheatsheet container-fluid bg-body">

  <section class="w-75 ms-5">
    <!--start breadcrumbs-->
    <nav aria-label="breadcrumb" class="mt-3 pt-2 ps-2">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Snapbyte</a></li>
        <li class="breadcrumb-item active" aria-current="page">My Recordings</li>
      </ol>
    </nav>
    <!--End breadcrumbs-->

    <article class="recordings">
      <!--My recordings header-->
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4">
            <h3>My Recordings</h3>
          </div>
          <div class="col-md-8">
            <a href="" class="btn btn-sm btn-outline-secondary me-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-arrow-down-up pb-1" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
              </svg> 
              By Date
            </a> 
            <a href="" class="btn btn-sm btn-outline-secondary me-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-funnel pb-1" viewBox="0 0 16 16">
                <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
              </svg> 
              Add Filter
            </a> 
            <a href="" class="btn btn-sm btn-primary me-2 text-light">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-camera-video pb-1" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"/>
              </svg>
              New Request
            </a> 
            <a type="button" class="btn btn-sm btn-danger me-2 text-light"  @click="showModal = true">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-record-circle pb-1" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
              </svg>
              Start Recording
            </a>
          </div>
        </div>
        <!--End My recordings header-->

        <!--My recordings table-->
        <div class="mt-5">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Recordings</th>
                <th scope="col">Title</th>
                <th scope="col">Views</th>
                <th scope="col">Size</th>
                <th scope="col">Last Modified</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(recording, index) in recordings" :key="index">
                <th scope="row"><img :src="recording.image_path" width="150" /></th>
                <td>
                  <h4>{{ recording.title }}</h4>
                  <p>{{ recording.description }}</p>
                </td>
                <td>{{ recording.views }}</td>
                <td>{{ recording.size }}</td>
                <td>{{ recording.last_modified }}</td>
                <td><strong><a href="#">...</a></strong></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--End my recordings table-->
      </div>

    <vue-final-modal v-model="showModal" classes="modal-container" content-class="modal-content">
      <div class="card modal__title">
        <div class="card-header">
          <div style="width:100%"><strong>New Recordings</strong> <span class="float-end"><a href="#" @click="closeForm()">X</a></span></div>
        </div>
        <div class="card-body">
          <form class="modal-form">
            <div class="error" id="error">
              {{ errorMsg }}
            </div>
            <div class="mb-3">
              <label class="form-label">Save the recording in</label>
              <select class="form-select">
                <option>Select a project</option>
              </select>
            </div>
            <div class="mb-3">
              <div class="form-check form-switch">
                <label class="form-check-label">Record screen</label>
                <input class="form-check-input float-end" type="checkbox" v-model="screen">
              </div>
            </div>
            <div class="mb-3">
              <div class="form-check form-switch">
                <label class="form-check-label ">Record camera</label>
                <input class="form-check-input float-end" type="checkbox" v-model="camera">
              </div>
            </div>
            <div class="mb-3">
              <div class="form-check form-switch">
                <label class="form-check-label">Record mic</label>
                <input class="form-check-input float-end" type="checkbox" v-model="mic">
              </div>
            </div>
            <div class="col text-center">
              <button type="button" class="btn btn-primary" @click="startRecording()">Start Recording</button>
            </div>
          </form>
        </div>
      </div>
    </vue-final-modal>

    </article>
  </section>

  

</div>
</template>
<style scoped>
::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .modal-content {
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
  justify-content: center;
  width: 30%;
}
.modal-form button {
  border-radius: 20px;
  padding: .5em 4em;
  justify-content: center;
}
.modal-form .form-check {
 padding-left: 0 !important;
}
.modal-form .form-check-input:checked {
  background-color: #05a876 !important;
  border-color: #05a876 !important;
}
.error {
  display: none;
  border: 1px solid #e63a3a;
  color: #e63a3a;
  border-radius: 4px;
  padding: .5em 1em;
  margin-bottom: 10px;
}
</style>

<style scoped>
.dark-mode div::v-deep .modal-content {
  border-color: #2d3748;
  background-color: #1a202c;
}
</style>

