import { Injectable, Inject, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Customer } from 'app/model/customer';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }


  getCustomers(): Observable<Customer[]> {

    const headers = new HttpHeaders;
headers.set("Authorization","Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ims2Q2lKV25zTDhXN0J4Wm44R0dfbyJ9.eyJodHRwOi8vZGV2LnZlbmVrYS5hZnJpY2EvZW1haWwiOiJleHQuc2lrdS5tb3lhbmFAdmVuZWthLmNvbSIsImh0dHA6Ly9kZXYudmVuZWthLmFmcmljYS9zdWJzY3JpcHRpb25JZCI6ImI5OTlhZmVmLTQzZTItNGE0OC04MzFkLWM3ZWQ1NTliN2I0MCIsImh0dHA6Ly9kZXYudmVuZWthLmFmcmljYS90ZW5hbnRJZCI6IjAzYTU0YzAxLWRiZTctNGFkMy1iZDlmLWU3MWY5Y2M4N2NmNyIsImh0dHA6Ly9kZXYudmVuZWthLmFmcmljYS9hcHBsaWNhdGlvbnMiOlt7Ik5hbWUiOiJiOTNhOTQzNi04NmNmLTRhN2QtODQ2NS1jYzc1NzM1M2VlNzEiLCJSb2xlcyI6WyJBZG1pbmlzdHJhdG9yIl19LHsiTmFtZSI6IjlkM2MwNDFmLWM0NmEtNDE1Yy1hMjkwLTNiY2I1NTg1MTRjOSIsIlJvbGVzIjpbIkFkbWluaXN0cmF0b3IiXX0seyJOYW1lIjoiNmRiOTE0NWQtZWFhMi00NWYxLWFjYWItNmU3YmIzNDdlNzNjIiwiUm9sZXMiOlsiQWRtaW5pc3RyYXRvciJdfSx7Ik5hbWUiOiIyZGRhYzUxZC1kMzFhLTRlYjMtOTM0Mi04NDRhNTllZmZlYzYiLCJSb2xlcyI6WyJBZG1pbmlzdHJhdG9yIl19LHsiTmFtZSI6IjAzNzMzZjJiLWQyNjQtNDYwZS04ZTEzLTgzOTFiMTVjZmIyZSIsIlJvbGVzIjpbIkFkbWluaXN0cmF0b3IiXX0seyJOYW1lIjoiZGE5NWRlMDgtMGY5Yi00YzFhLWE1ZjEtZTMxZDgzNzQ0MDgxIiwiUm9sZXMiOlsiQWRtaW5pc3RyYXRvciJdfSx7Ik5hbWUiOiJjOTQ1ODY2Zi1hNjQwLTQ2NWQtYmNkNS1lN2E0N2Y0MWE3M2EiLCJSb2xlcyI6WyJBZG1pbmlzdHJhdG9yIl19LHsiTmFtZSI6ImJjMGVhNWY4LWZkZWMtNGYwNy1hYWE1LTYzMjAyYTA3NjNkYSIsIlJvbGVzIjpbIkFkbWluaXN0cmF0b3IiXX0seyJOYW1lIjoiYmE4N2I1ZDEtMTIwNC00OTZlLThjYWEtODI2MjNkYTE2Mzg4IiwiUm9sZXMiOlsiQWRtaW5pc3RyYXRvciJdfV0sImlzcyI6Imh0dHBzOi8vdmVuZWthLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJlbWFpbHw2MGQzMjdiZGM2ODY0NzUzOTFjMTlhZmMiLCJhdWQiOiJodHRwczovL2luZGlnb1YzL2FwaSIsImlhdCI6MTYzMDA1MTgwNiwiZXhwIjoxNjMwMTM4MjA2LCJhenAiOiJ2VWV4VUs3ZGlTZW1tUUJhc2xHaW5HYndla3BORktvbCJ9.mQPsmiXGbwHMwSeeK55exAKigyztjhCfi422D5460tG2qrxgkOXixlLgl3k3BfE4UVaxVpuSk9vBaRcsKFzlCp2s4KZvH34jdNWvjh4XrwbqLAUZArOgy17LOVe2Z1rlwwJFLvtanPufsRTtLRMw0KrPQnsOgYEkr7qg5MP57BWzhc-oCFtn3J5sgbcJdlNIAwu55vT_W5zMMlhMOgY56hntMuOQ1Gx9H00n3S0a9OBVwMYBGunCYYZoXbP2DmLGt1tvVXD4FdQoWpVUpFzweNIVuvb-MAc42U24wdIrwInMUSjofBPbWHD_YxP2r3KgR86bGfeu57ONx7yPOVh50A");
  return this.http.get<any>("https://jsonplaceholder.typicode.com/users",{headers});
  }

}