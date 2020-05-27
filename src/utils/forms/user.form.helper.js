import { getInstance } from "../../plugins/auth0.plugin";

export const getCleanForm = () => ({
  personalInfo: {
    nickname: "",
    name: "",
    lastName: "",
    address: "",
    dob: "",
    landlinePhone: "",
    mobilePhone: ""
  },
  relevantInfoPerson: {
    canTravel: false,
    canAdopt: false,
    canTransit: false,
    canHelp: false,
    canPrint: false,
    canBuild: false,
    houseType: "",
    hoursAway: "8-",
    houseProtection: false,
    hasAdults: false,
    adults: "",
    hasChildren: false,
    children: "",
    hasPets: false,
    otherPets: "",
    availability: {
      mon: false,
      tue: false,
      wed: false,
      thu: false,
      fri: false,
      sat: false,
      sun: false
    },
    experience: false,
    hasTransportBox: false,
    instagram: "",
    twitter: "",
    facebook: ""
  },
  relevantInfoOrganization: {
    username: "",
    showInMap: true,
    displayName: "", // cambiar a orgName?
    specialization: "",
    instagram: "",
    twitter: "",
    facebook: "",
    donations: {
      owner: "",
      email: "",
      hasBank: false,
      bank: {
        owner: "",
        bankName: "",
        accountId: "",
        accountCBU: "",
        accountAlias: ""
      },
      hasMercadopago: false,
      mercadopago: {
        links: [
          // {
          //   amount: number,
          //   description: string,
          //   url: string,
          // },
        ]
      },
      hasPaypal: false,
      paypal: {
        link: ""
      }
    }
  }
});

export const submitPersonalInfo = async step => {
  const data = {
    nickname: step.nickname,
    name: step.name,
    lastName: step.lastName,
    address: step.address,
    dob: step.dob,
    landlinePhone: step.landlinePhone,
    mobilePhone: step.mobilePhone
  };
  return getInstance().updateUser(data);
};

export const submitRelevantInfoPerson = async step => {
  const data = {
    personInfo: {
      canTravel: step.canTravel,
      canAdopt: step.canAdopt,
      canTransit: step.canTransit,
      canHelp: step.canHelp,
      canPrint: step.canPrint,
      canBuild: step.canBuild,
      houseType: step.houseType,
      hoursAway: step.hoursAway,
      houseProtection: step.houseProtection,
      hasAdults: step.hasAdults,
      adults: step.adults,
      hasChildren: step.hasChildren,
      children: step.children,
      hasPets: step.hasPets,
      otherPets: step.otherPets,
      availability: step.availability,
      experience: step.experience,
      hasTransportBox: step.hasTransportBox,
      instagram: step.instagram,
      twitter: step.twitter,
      facebook: step.facebook
    }
  };
  return getInstance().updateUser(data);
};

export const submitRelevantInfoRefuge = step => {
  step.donations.mercadopago.links = step.donations.mercadopago.links.filter(
    link => link.amount && link.url
  );
  const data = {
    refugeInfo: {
      username: step.username,
      displayName: step.displayName,
      specialization: step.specialization.split(",").map(str => str.trim()),
      showInMap: step.showInMap,
      twitter: step.twitter,
      instagram: step.instagram,
      facebook: step.facebook,
      donations: step.donations
    }
  };
  return getInstance().updateUser(data);
};

export const submitRelevantInfoVet = step => {
  step.donations.mercadopago.links = step.donations.mercadopago.links.filter(
    link => link.amount && link.url
  );
  const data = {
    vetInfo: {
      username: step.username,
      displayName: step.displayName,
      specialization: step.specialization.split(",").map(str => str.trim()),
      showInMap: step.showInMap,
      twitter: step.twitter,
      instagram: step.instagram,
      facebook: step.facebook,
      donations: step.donations
    }
  };
  return getInstance().updateUser(data);
};

export const getPopulatedForm = (mongoUser, userType) => {
  const form = getCleanForm();
  const userKeys = Object.keys(mongoUser);

  const personalInfoKeys = Object.keys(form.personalInfo);
  userKeys.forEach(key => {
    const val = mongoUser[key];
    if (personalInfoKeys.includes(key)) {
      form.personalInfo[key] = val;
    }
  });

  // cuidado si se agregan objetos con datos respectivos porque habria conflictos
  // e.g. volunteerInfo
  const orgInfo = mongoUser[`${userType}Info`];
  if (orgInfo) {
    // es organizacion
    const formOrganizationKeys = Object.keys(form.relevantInfoOrganization);
    Object.entries(orgInfo).forEach(([key, val]) => {
      if (formOrganizationKeys.includes(key)) {
        form.relevantInfoOrganization[key] = val;
        if (key === "specialization") {
          form.relevantInfoOrganization[key] =
            Array.isArray(val) && val.join(", ");
        }
      }
    });
  } else if (mongoUser.personInfo) {
    // es persona
    const formPersonKeys = Object.keys(form.relevantInfoPerson);
    Object.entries(mongoUser.personInfo).forEach(([personKey, val]) => {
      if (formPersonKeys.includes(personKey)) {
        form.relevantInfoPerson[personKey] = val;
      }
    });
  }

  return form;
};
